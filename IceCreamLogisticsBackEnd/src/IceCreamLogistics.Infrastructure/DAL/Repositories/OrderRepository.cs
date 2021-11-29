using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Application;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Domain.Delivery;
using IceCreamLogistics.Infrastructure.DAL.DBOs;
using Microsoft.EntityFrameworkCore;

namespace IceCreamLogistics.Infrastructure.DAL.Repositories
{
    internal class OrderRepository: IOrderRepository
    {
        private readonly IceCreamLogisticsDbContext _dbContext;

        public OrderRepository(IceCreamLogisticsDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        
        public async Task<Order> Create(Order order)
        {
                var orderDbo = order.MapTo<OrderDbo>();
            
            await _dbContext.Orders.AddAsync(orderDbo);
            await _dbContext.OrderItems.AddRangeAsync(orderDbo.Items);

            await _dbContext.SaveChangesAsync();

            orderDbo = await _dbContext.Orders
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
                        
            var orderDbo = await _dbContext.Orders
                .FirstAsync(x => x.Id == orderId);
            orderDbo.OrderState = state;
                
            await _dbContext.SaveChangesAsync();
            
            return DboMappingProvider.Mapper
                .From(orderDbo)
                .AdaptToType<Order>();  
        }

        public async Task<IEnumerable<Order>> ListOrders(OrderSearchParams searchParams, LazyLoadingParams loadingParams)
        {
            IQueryable<OrderDbo> orders = GetOrdersWithDefaultIncludes();

            // Filter
            if (searchParams.From is not null)
                orders = orders.Where(x => x.RequestedDate >= searchParams.From);
            if (searchParams.To is not null)
                orders = orders.Where(x => x.RequestedDate >= searchParams.To);
            if (!string.IsNullOrWhiteSpace(searchParams.ClientName))
                orders = orders.Where(x => x.Client.Name.StartsWith(searchParams.ClientName));
            if (!string.IsNullOrWhiteSpace(searchParams.RecipeName))
                orders = orders.Where(x => x.Items.Any(item => item.Recipe.Name.StartsWith(searchParams.RecipeName)));
            
            // Sort
            orders = ApplyDefaultOrdering(orders);
            
            // Paging
            return  orders
                .ApplyLazyLoading(loadingParams)
                .ToArray()
                .Select(x => DboMappingProvider.Mapper
                    .From(x)
                    .AdaptToType<Order>());
        }
        
        public async Task<OrderDetails> GetOrderDetailsById(int orderId)
        {
            var orderDbo = await GetOrdersWithDefaultIncludes()
                .FirstAsync(x => x.Id == orderId);
            
            return orderDbo.MapTo<OrderDetails>();
        }

        public async Task<IEnumerable<OrderForDelivery>> ListOrdersForDelivery(OrderForDeliverySearchParams searchParams, LazyLoadingParams lazyLoadingParams)
        {
            var orders = GetOrdersWithDefaultIncludes();

            // Filter
            orders = orders
                .Where(x => x.OrderState != OrderState.Delivered && x.OrderState != OrderState.Cancelled)
                .Where(x => x.DeliveryId == null);
            
            // Order
            orders = ApplyDefaultOrdering(orders);
            
            // Map
            return orders
                .ApplyLazyLoading(lazyLoadingParams)
                .ToArray()
                .Select(x => x.MapTo<OrderForDelivery>());
        }

        private IQueryable<OrderDbo> GetOrdersWithDefaultIncludes()
        {
            return _dbContext.Orders
                .Include(x => x.Items).ThenInclude(x => x.Cancellations)
                .Include(x => x.Items).ThenInclude(x => x.Recipe)
                .Include(x => x.Client).ThenInclude(x => x.Address);
        }
        
        
        private static IQueryable<OrderDbo> ApplyDefaultOrdering(IQueryable<OrderDbo> orders)
        {
            return orders
                .OrderByDescending(x => x.RequestedDate)
                .ThenBy(x => x.Client.Name)
                .ThenBy(x => x.OrderCreated);
        }
    }
}