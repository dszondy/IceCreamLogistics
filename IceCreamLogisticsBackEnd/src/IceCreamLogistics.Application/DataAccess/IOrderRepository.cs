using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Domain.Delivery;

namespace IceCreamLogistics.Application
{
    public interface IOrderRepository
    {
        Task<Order> Create(Order order);
        Task<OrderDetails> GetOrderDetailsById(int orderId);
        Task<Order> UpdateState(int orderId, OrderState state);
        Task<IEnumerable<Order>> ListOrders(OrderSearchParams searchParams, LazyLoadingParams loadingParams);
        Task<IEnumerable<OrderForDelivery>> ListOrdersForDelivery(OrderForDeliverySearchParams searchParams, LazyLoadingParams lazyLoadingParams);
    }
}