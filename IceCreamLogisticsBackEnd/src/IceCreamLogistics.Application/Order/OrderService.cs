using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IOrderProgressRepository _orderProgressRepository;

        public OrderService(IOrderRepository orderRepository, IOrderProgressRepository orderProgressRepository)
        {
            _orderRepository = orderRepository;
            _orderProgressRepository = orderProgressRepository;
        }

        public Task<Domain.Order> Place(Domain.Order order)
        {
            order.OrderCreated = DateTime.Now;
            order.OrderState = OrderState.Active;
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
            return _orderProgressRepository.GetIncompleteParts(searchParams, lazyLoadingParams);
        }
    }
}