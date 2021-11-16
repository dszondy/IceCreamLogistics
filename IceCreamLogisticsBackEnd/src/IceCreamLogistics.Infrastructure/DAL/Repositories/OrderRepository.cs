using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Application;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Infrastructure.DAL.DBOs;
using Microsoft.EntityFrameworkCore;

namespace IceCreamLogistics.Infrastructure.DAL.Repositories
{
    internal class OrderRepository: IOrderRepository
    {
        public OrderRepository(IceCreamLogisticsDbContext dbContext)
        {
            DbContext = dbContext;
        }

        private IceCreamLogisticsDbContext DbContext { get; }

        public async Task<Order> Create(Order order)
        {
                var orderDbo = order.MapTo<OrderDbo>();
            
            await DbContext.Orders.AddAsync(orderDbo);
            await DbContext.OrderItems.AddRangeAsync(orderDbo.Items);

            await DbContext.SaveChangesAsync();

            orderDbo = await DbContext.Orders
                .Include(x => x.Client)
                .Include(x => x.Items)
                .ThenInclude(x => x.Recipe)
                .FirstAsync(x => x.Id == orderDbo.Id);
            
            return DboMappingProvider.Mapper
                .From(orderDbo)
                .AdaptToType<Order>();
        }

        public async Task<Order> UpdateState(int orderId, OrderState state)
        {
                        
            var orderDbo = await DbContext.Orders
                .FirstAsync(x => x.Id == orderId);
            orderDbo.OrderState = state;
                
            await DbContext.SaveChangesAsync();
            
            return DboMappingProvider.Mapper
                .From(orderDbo)
                .AdaptToType<Order>();  
        }

        public async Task<IEnumerable<Order>> GetOrdersBySearch(OrderSearchParams searchParams, LazyLoadingParams loadingParams)
        {
            IQueryable<OrderDbo> orders = DbContext.Orders
                .Include(x => x.Items)
                .ThenInclude(x => x.Recipe)
                .Include(x => x.Client)
                .Where(x => x.OrderState == OrderState.Active || x.OrderState == OrderState.ReadyForDelivery);

            if (searchParams.From is not null)
                orders = orders.Where(x => x.RequestedDate >= searchParams.From);
            
            if (searchParams.To is not null)
                orders = orders.Where(x => x.RequestedDate >= searchParams.To);     
            
            if (!string.IsNullOrWhiteSpace(searchParams.ClientName))
                orders = orders.Where(x => x.Client.Name.StartsWith(searchParams.ClientName));    
            
            if (!string.IsNullOrWhiteSpace(searchParams.RecipeName))
                orders = orders.Where(x => x.Items.Any(item => item.Recipe.Name.StartsWith(searchParams.RecipeName)));
            
            return orders
                .OrderByDescending(x => x.RequestedDate)
                .ThenBy(x => x.Client.Name)
                .ThenBy(x => x.OrderCreated)
                .ApplyLazyLoading(loadingParams)
                .ToArray()
                .Select(x => DboMappingProvider.Mapper
                    .From(x)
                    .AdaptToType<Order>());
        }

        public async Task<Order> Get(int orderId)
        {
            var orderDbo = await DbContext.Orders
                .Include(x => x.Items)
                .ThenInclude(x => x.Recipe)
                .Include(x => x.Client)
                .ThenInclude(x => x.Address)
                .FirstAsync(x => x.Id == orderId);
                
            
            return DboMappingProvider.Mapper
                .From(orderDbo)
                .AdaptToType<Order>();  
        }

        public async Task<OrderDetails> GetDetailed(int orderId)
        {
            var orderDbo = await DbContext.Orders
                .Include(x => x.Items)
                .ThenInclude(x => x.Recipe)
                .Include(x => x.Client)
                .ThenInclude(x => x.Address)
                .FirstAsync(x => x.Id == orderId);
                
            
            return DboMappingProvider.Mapper
                .From(orderDbo)
                .AdaptToType<OrderDetails>();
        }
    }
}