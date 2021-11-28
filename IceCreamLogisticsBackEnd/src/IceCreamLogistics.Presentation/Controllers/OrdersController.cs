using System.Collections;
using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Application;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Domain.Delivery;
using IceCreamLogistics.Presentation.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace IceCreamLogistics.Presentation.Controllers
{
    [Route("orders")]    
    [ApiController]   
    public class OrdersController: Controller
    {

        private readonly IOrderService _orderService;
        private readonly  IOrderProgressRepository _orderProcessingService;

        public OrdersController(IOrderService orderService)
        {
            this._orderService = orderService;
        }

        [HttpGet]
        [Route("")]
        public async Task<ActionResult<LazyLoadingResponse<OrderDto>>> Search([FromQuery]OrderSearchParamsDto orderSearchParams,
            [FromQuery]LazyLoadingParamsDto lazyLoadingParams)
        {
            var result = await _orderService.Search(
                orderSearchParams.MapTo<OrderSearchParams>(),
                lazyLoadingParams.MapTo<LazyLoadingParams>());
            
            return Ok(result
                .ToLazyLoadingResponse(lazyLoadingParams));
        }

        
        [HttpGet]
        [Route("incomplete")]
        public async Task<ActionResult<LazyLoadingResponse<OrderPartDto>>> SearchForMixing([FromQuery]OrderSearchParamsDto orderSearchParams, 
            [FromQuery]LazyLoadingParamsDto lazyLoadingParams)
        {
            var result = await _orderService.SearchIncomplete(orderSearchParams.MapTo<OrderSearchParams>(), lazyLoadingParams.MapTo<LazyLoadingParams>());
            
            return Ok(result
                .ToLazyLoadingResponse(lazyLoadingParams));
        }
        
        [HttpGet]
        [Route("for-delivery")]
        public async Task<ActionResult<LazyLoadingResponse<OrderForDeliveryDto>>> SearchForDelivery([FromQuery]OrderForDeliverySearchParamsDto orderSearchParams, 
            [FromQuery]LazyLoadingParamsDto lazyLoadingParams)
        {
            var result = await _orderService.SearchForDelivery(
                new OrderForDeliverySearchParams(), 
                lazyLoadingParams.MapTo<LazyLoadingParams>());
            
            return Ok(result
                .Select(x => x.MapTo<OrderForDeliveryDto>())
                .ToLazyLoadingResponse(lazyLoadingParams));
        }

        
        
        [HttpPost]
        [Route("")]
        public async Task<ActionResult<OrderDto>> PlaceOrder([FromBody] OrderCreateDto order)
        {
            var result = await _orderService.Place(order.MapTo<Order>());
            
            return Ok(result.MapTo<OrderDto>());
        }
        
        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<OrderDetailsDto>> GetDetails([FromRoute] int id)
        {
            var result = await _orderService.Get(id);
            return Ok(result.MapTo<OrderDetailsDto>());
        }
        
        [HttpPost]
        [Route("{id}/cancel")]
        public async  Task<ActionResult<OrderDto>> CancelOrder([FromRoute] int id)
        {
            var result = await _orderService.Cancel(id);
            return Ok(result.MapTo<OrderDto>());
        }
        
        [HttpPost]
        [Route("cancel-item")]
        public async  Task<ActionResult> CancelItems([FromBody] OrderItemCancellationDto cancellationDto)
        {
            await _orderProcessingService.RegisterCancelledAmounts(new []{ cancellationDto.MapTo<OrderItemCancellation>()});
            return Ok();
        }
    }
}