using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IOrderPartRepository _orderPartRepository;

        public OrderService(IOrderRepository orderRepository, IOrderPartRepository orderPartRepository)
        {
            _orderRepository = orderRepository;
            _orderPartRepository = orderPartRepository;
        }

        public Task<Domain.Order> Place(Domain.Order order)
        {
            return _orderRepository.Create(order);
        }

        public Task<Domain.Order> Cancel(int orderId)
        {
            return _orderRepository
                .UpdateState(orderId, OrderState.Cancelled);
        }

        public Task<IEnumerable<Order>> Search(OrderSearchParams searchParams, LazyLoadingParams lazyLoadingParams)
        {
            return _orderRepository.GetOrdersBySearch(searchParams, lazyLoadingParams);
        }

        public Task<IEnumerable<OrderPart>> SearchIncomplete(OrderSearchParams searchParams,
            LazyLoadingParams lazyLoadingParams)
        {
            return _orderPartRepository.GetIncompleteParts(searchParams, lazyLoadingParams);
        }
    }
}