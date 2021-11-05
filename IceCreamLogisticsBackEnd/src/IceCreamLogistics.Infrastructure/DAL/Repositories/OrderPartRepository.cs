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
    internal class OrderPartRepository : IOrderPartRepository
    {
        public OrderPartRepository(IceCreamLogisticsDbContext dbContext)
        {
            DbContext = dbContext;
        }

        private IceCreamLogisticsDbContext DbContext { get; }

        class KeyPair
        {
            public int? OrderId { get; set; }
            public int RecipeId { get; set; }
        }
        public async Task DepleteIncompleteItems(IEnumerable<MixingBatchCreateMember> members)
        {
            var items = DbContext.Orders
                .Include(x => x.IncompleteItems)
                .Where(x => members.Select(member => member.OrderId).Contains(x.Id))
                .SelectMany(x => x.IncompleteItems);

            await items.ForEachAsync(item => item.Amount -= members
                .First(x => item.IncompleteOrderId == x.OrderId).Items
                .First(x => item.RecipeId == x.RecipeId).Amount);
            await DbContext.SaveChangesAsync();
        }       


        public async Task<IEnumerable<OrderPart>> GetIncompleteParts(OrderSearchParams searchParams, LazyLoadingParams loadingParams)
        {
            IQueryable<OrderDbo> orders = DbContext.Orders
                .Include(x => x.Items).ThenInclude(x => x.Recipe)
                .Include(x => x.IncompleteItems).ThenInclude(x => x.Recipe)
                .Include(x => x.Client)
                .Where(x => x.OrderState == OrderState.Active)
                .Where(x => x.IncompleteItems.Sum(item => item.Amount) > 0);

            if (searchParams.From is not null)
                orders = orders.Where(x => x.RequestedDate >= searchParams.From);
            
            if (searchParams.To is not null)
                orders = orders.Where(x => x.RequestedDate >= searchParams.To);     
            
            if (!string.IsNullOrWhiteSpace(searchParams.ClientName))
                orders = orders.Where(x => x.Client.Name.StartsWith(searchParams.ClientName));    
            
            if (!string.IsNullOrWhiteSpace(searchParams.RecipeName))
                orders = orders.Where(x => x.IncompleteItems.Any(item => item.Recipe.Name.StartsWith(searchParams.RecipeName)));
            
            return orders
                .OrderBy(x => x.Client.Name)
                .ThenBy(x => x.OrderCreated)
                .ApplyLazyLoading(loadingParams)
                .ToArray()
                .Select(x => new OrderPart()
                {
                    Order = x.MapTo<Order>(),
                    IncompleteItems = x.IncompleteItems.Select(item => item.MapTo<OrderItem>())
                });        
        }
    }
}