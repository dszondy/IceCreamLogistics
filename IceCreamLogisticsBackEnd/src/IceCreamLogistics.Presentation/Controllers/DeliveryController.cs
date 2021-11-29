using System;
using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Application;
using IceCreamLogistics.Application.Delivery;
using IceCreamLogistics.Application.Model;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Domain.Delivery;
using IceCreamLogistics.Presentation.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace IceCreamLogistics.Presentation.Controllers
{    
    [Route("deliveries")]    
    [ApiController]    
    public class DeliveryController: Controller
    {
        private readonly IDeliveryService _deliveryService;

        public DeliveryController(IDeliveryService deliveryService)
        {
            _deliveryService = deliveryService;
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<DeliveryDetailsDto>> Get(int id)
        {
            var result = await _deliveryService.Get(id);
            return result.MapTo<DeliveryDetailsDto>();
        }
        
        [HttpPost]
        [Route("")]
        public async Task<ActionResult<DeliveryDetailsDto>> Create(DeliveryEditDto delivery)
        {
            var result = await  _deliveryService.Create(delivery.MapTo<DeliveryEdit>());
            return result.MapTo<DeliveryDetailsDto>();
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<ActionResult<DeliveryDetailsDto>> Update(int id, DeliveryEditDto delivery)
        {
           var result = await _deliveryService.Update(id, delivery.MapTo<DeliveryEdit>());
           return result.MapTo<DeliveryDetailsDto>();
        }
        
        [HttpGet]
        [Route("")]
        public async Task<ActionResult<LazyLoadingResponse<DeliveryShallow>>> List([FromQuery] DeliverySearchParamsDto searchParams, [FromQuery] LazyLoadingParamsDto lazyLoadingParams)
        {
            var result = await _deliveryService.List(searchParams.MapTo<DeliverySearchParams>(), lazyLoadingParams.MapTo<LazyLoadingParams>());
            return result
                .Select(x => x.MapTo<DeliveryShallow>())
                .ToLazyLoadingResponse(lazyLoadingParams);
        }
    }
}