using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Application.Mixing;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Domain.Delivery;

namespace IceCreamLogistics.Application
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IOrderProgressRepository _orderProgressRepository;
        private readonly IMixingRepository _mixingRepository;


        public OrderService(IOrderRepository orderRepository, IOrderProgressRepository orderProgressRepository, IMixingRepository mixingRepository)
        {
            _orderRepository = orderRepository;
            _orderProgressRepository = orderProgressRepository;
            _mixingRepository = mixingRepository;
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
            return _orderRepository.ListOrders(searchParams, lazyLoadingParams);
        }

        public Task<IEnumerable<OrderPart>> SearchIncomplete(OrderSearchParams searchParams,
            LazyLoadingParams lazyLoadingParams)
        {
            return _orderProgressRepository.GetIncompleteParts(searchParams, lazyLoadingParams);
        }

        public async Task<OrderDetails> Get(int orderId)
        {
            var batches = await _mixingRepository.GetAssociatedBatches(orderId);
            var order = await _orderRepository.GetOrderDetailsById(orderId);
            return order;
        }

        public Task<IEnumerable<OrderForDelivery>> SearchForDelivery(OrderForDeliverySearchParams searchParams, LazyLoadingParams lazyLoadingParams)
        {
            return _orderRepository.ListOrdersForDelivery(searchParams, lazyLoadingParams);
        }

        public Task RegisterCancelledAmounts(OrderItemCancellation[] orderItemCancellations)
        {
            return _orderProgressRepository.RegisterCancelledAmounts(orderItemCancellations);
        }
    }
}