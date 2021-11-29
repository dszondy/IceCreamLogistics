using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Domain.Delivery;

namespace IceCreamLogistics.Application
{
    public interface IOrderService
    {
        Task<Domain.Order> Place(Domain.Order order);
        Task<Domain.Order> Cancel(int orderId);
        Task<IEnumerable<Order>> Search(OrderSearchParams searchParams, LazyLoadingParams lazyLoadingParams);

        Task<IEnumerable<OrderPart>> SearchIncomplete(OrderSearchParams searchParams,
            LazyLoadingParams lazyLoadingParams);
        
        Task<OrderDetails> Get(int orderId);
        Task<IEnumerable<OrderForDelivery>> SearchForDelivery(OrderForDeliverySearchParams searchParams, LazyLoadingParams lazyLoadingParams);
    }
}