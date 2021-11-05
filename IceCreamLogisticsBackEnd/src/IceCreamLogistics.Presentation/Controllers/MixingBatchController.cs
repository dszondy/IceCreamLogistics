using System;
using System.Threading.Tasks;
using IceCreamLogistics.Application.Manufacturing;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Infrastructure.DAL;
using IceCreamLogistics.Presentation.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace IceCreamLogistics.Presentation.Controllers
{
    [Route("mixing-batches")]    
    [ApiController]    
    public class MixingBatchController: Controller
    {

        private readonly IMixingBatchService _mixingBatchService;

        public MixingBatchController(IMixingBatchService mixingBatchService)
        {
            _mixingBatchService = mixingBatchService;
        }

        [HttpPost]
        [Route("")]
        public async Task<ActionResult<MixingBatchCreateDto>> Create([FromBody] MixingBatchCreateDto clientDto)
        {
            return (await _mixingBatchService.Create(clientDto.MapTo<MixingBatchCreate>()))
                .MapTo<MixingBatchCreateDto>();
        }    
    }
}