using System.Collections;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Application;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Infrastructure.DAL.DBOs;
using Microsoft.EntityFrameworkCore;

namespace IceCreamLogistics.Infrastructure.DAL.Repositories
{
    internal class OrderProgressRepository : IOrderProgressRepository
    {
        private readonly IceCreamLogisticsDbContext _dbContext;

        public OrderProgressRepository(IceCreamLogisticsDbContext dbContext)
        {
            _dbContext = dbContext;
        }


        class KeyPair
        {
            public int? OrderId { get; set; }
            public int RecipeId { get; set; }
        }
        public async Task RegisterSelectedMixingAmounts(IEnumerable<MixingBatchCreateMember> members)
        {
            var items = _dbContext.Orders
                .Include(x => x.Items)
                .Where(x => members.Select(member => member.OrderId).Contains(x.Id))
                .SelectMany(x => x.Items);

            await items.ForEachAsync(item => item.SelectedMixingAmount += members
                .First(x => item.OrderId == x.OrderId).Items
                .First(x => item.RecipeId == x.RecipeId).Amount);
            
            await _dbContext.Orders          
                .Where(x => members.Select(member => member.OrderId).Contains(x.Id))
                .ForEachAsync(order => order.OrderState = OrderState.Active);
            
            await _dbContext.SaveChangesAsync();
        }

        public async Task RegisterCompletedMixingAmounts(IEnumerable<MixingBatchCreateMember> members)
        {
            var orders = await _dbContext.Orders
                .Include(x => x.Items)
                .Where(x => members.Select(member => member.OrderId)
                    .Contains(x.Id))
                .ToArrayAsync();
                
            var items =  orders.SelectMany(x => x.Items);

            foreach (var item in items)
            {
                item.MixedAmount += members
                    .First(x => item.OrderId == x.OrderId).Items
                    .First(x => item.RecipeId == x.RecipeId).Amount;
            };

            foreach (var order in orders)
            {
                order.OrderState = order.Items.All(item => item.MixedAmount == item.Amount) ? OrderState.ReadyForDelivery : OrderState.Active;
            }
            
            await _dbContext.SaveChangesAsync();
        }

        public async Task RegisterCancelledAmounts(IEnumerable<OrderItemCancellation> items)
        {
            var orders = _dbContext.Orders
                .Include(x => x.Items)
                .Where(x => items.Select(item => item.OrderId).Contains(x.Id));
            
            _dbContext.OrderItemCancellations.AddRange(items.Select(x => new OrderItemCancellationDbo()
            {
                OrderItemId = orders
                    .First(order => order.Id == x.OrderId)
                    .Items
                    .First(item => item.RecipeId == x.RecipeId)
                    .Id,
                Amount = x.Amount
            }));
        }


        public async Task<IEnumerable<OrderPart>> GetIncompleteParts(OrderSearchParams searchParams, LazyLoadingParams loadingParams)
        {
            IQueryable<OrderDbo> orders = _dbContext.Orders
                .Include(x => x.Items).ThenInclude(x => x.Recipe)
                .Include(x =>x.Items).ThenInclude(x => x.Cancellations)
                .Include(x => x.Client)
                .Where(x => x.OrderState == OrderState.Active)
                .Where(x => x.Items.Sum(item => item.Amount - item.SelectedMixingAmount - item.CancelledAmount) > 0);

            if (searchParams.From is not null)
                orders = orders.Where(x => x.RequestedDate >= searchParams.From);
            
            if (searchParams.To is not null)
                orders = orders.Where(x => x.RequestedDate >= searchParams.To);     
            
            if (!string.IsNullOrWhiteSpace(searchParams.ClientName))
                orders = orders
                    .Where(x => x.Client.Name
                        .StartsWith(searchParams.ClientName));    
            
            if (!string.IsNullOrWhiteSpace(searchParams.RecipeName))
                orders = orders.Where(x => x.Items
                    .Any(item => item.Recipe.Name
                        .StartsWith(searchParams.RecipeName)));
            
            return orders
                .OrderBy(x => x.Client.Name)
                .ThenBy(x => x.OrderCreated)
                .ApplyLazyLoading(loadingParams)
                .ToArray()
                .Select(x => new OrderPart()
                {
                    Order = x.MapTo<Order>(),
                    IncompleteItems = x.Items.Select(item => item.MapTo<OrderItem>())
                });        
        }
    }
}