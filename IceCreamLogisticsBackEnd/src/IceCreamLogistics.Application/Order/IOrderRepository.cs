using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public interface IOrderRepository
    {
        Task<Order> Create(Order order);
        Task<Order> UpdateState(int orderId, OrderState state);
        Task<IEnumerable<Order>> GetOrdersBySearch(OrderSearchParams searchParams, LazyLoadingParams loadingParams);
        Task<Order> Get(int orderId);

    }
}