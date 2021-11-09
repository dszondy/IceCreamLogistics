using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Application;
using IceCreamLogistics.Application.Manufacturing;
using IceCreamLogistics.Application.Mixing;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Infrastructure.DAL;
using IceCreamLogistics.Presentation.DTOs;
using IceCreamLogistics.Presentation.DTOs.IceCreamLogistics.Domain;
using Microsoft.AspNetCore.Mvc;

namespace IceCreamLogistics.Presentation.Controllers
{
    [Route("mixing")]    
    [ApiController]    
    public class MixingBatchController: Controller
    {

        private readonly IMixingService _mixingService;
        private readonly IMixingInventoryCheckService _mixingInventoryCheckService;

        public MixingBatchController(IMixingService mixingService, IMixingInventoryCheckService mixingInventoryCheckService)
        {
            _mixingService = mixingService;
            _mixingInventoryCheckService = mixingInventoryCheckService;
        }

        [HttpPost]
        [Route("")]
        public async Task<ActionResult<MixingBatchCreateDto>> Create([FromBody] MixingBatchCreateDto clientDto)
        {
            clientDto.Id = (await _mixingService.Create(clientDto.MapTo<MixingBatchCreate>()));
            return clientDto;
        }

        [HttpPut]
        [Route("{id}/administer")]
        public async Task<MixingBatchDetailsDto> AdministerAbsolute(int id, IEnumerable<MixingBatchCreateMemberDto> members)
        {
            var result = await _mixingService.AdministerAbsolute(id, members
                .Select(member => member.MapTo<MixingBatchCreateMember>()));
            return result.MapTo<MixingBatchDetailsDto>();
        }

        [HttpGet]
        [Route("")]
        public async Task<LazyLoadingResponse<MixingBatchShallowDto>> List([FromQuery]LazyLoadingParamsDto lazyLoadingParams)
        {
            var result = await _mixingService.List(
                new MixingSearchParams(), 
                lazyLoadingParams.MapTo<LazyLoadingParams>());
            
            return result.Select(x => x.MapTo<MixingBatchShallowDto>())
                .ToLazyLoadingResponse(lazyLoadingParams);
        }
        
        [HttpGet]
        [Route("{id}")]
        public async Task<MixingBatchDetailsDto> Get(int id)
        {
            var result = await _mixingService.Get(id);
            return result.MapTo<MixingBatchDetailsDto>();
        }
        [HttpPost]
        [Route("inventory-check")]
        public async Task<IEnumerable<MixingInventoryCheckDto>> InventoryCheck(MixingBatchCreateDto batch)
        {
            return (await _mixingInventoryCheckService
                    .CheckInventory(batch.MapTo<MixingBatchCreate>()))
                .Select(x => x.MapTo<MixingInventoryCheckDto>());
        }
    }
}