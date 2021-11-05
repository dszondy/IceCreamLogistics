using System.Threading.Tasks;
using IceCreamLogistics.Application;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Presentation.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace IceCreamLogistics.Presentation.Controllers
{
    [Route("orders")]    
    [ApiController]   
    public class OrdersController: Controller
    {

        private readonly IOrderService _orderService;

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
        public async Task<ActionResult<LazyLoadingResponse<OrderPartDto>>> SearchIncompleteOrders([FromQuery]OrderSearchParamsDto orderSearchParams, 
            [FromQuery]LazyLoadingParamsDto lazyLoadingParams)
        {
            var result = await _orderService.SearchIncomplete(orderSearchParams.MapTo<OrderSearchParams>(), lazyLoadingParams.MapTo<LazyLoadingParams>());
            
            return Ok(result
                .ToLazyLoadingResponse(lazyLoadingParams));
        }
        
        [HttpPost]
        [Route("")]
        public async Task<ActionResult<OrderDto>> PlaceOrder([FromBody] OrderDto order)
        {
            var result = await _orderService.Place(order.MapTo<Order>());
            
            return Ok(result.MapTo<OrderDto>());
        }

    }
}