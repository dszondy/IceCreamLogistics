using System;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using IceCreamLogistics.Application;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Infrastructure.DAL;
using IceCreamLogistics.Presentation.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace IceCreamLogistics.Presentation.Controllers
{    
    [Route("clients")]    
    [ApiController]    
    public class ClientController: Controller
    {
        public ClientController(IClientService clientService)
        {
            ClientService = clientService;
        }

        private IClientService ClientService { get; }

        [HttpGet]
        [Route("")]
        public async Task<ActionResult<LazyLoadingResponse<Client>>> Get([FromQuery] LazyLoadingParamsDto lazyLoadingParamsDto, [FromQuery]string? search = "")
        {
            var clients = await ClientService.Search(search ?? string.Empty, DtoMappingProvider.Mapper
                .From(lazyLoadingParamsDto)
                .AdaptToType<LazyLoadingParams>());
            return clients.ToLazyLoadingResponse(lazyLoadingParamsDto);
        }
        
        
        [HttpPost]
        [Route("")]
        public async Task<ActionResult<ClientDto>> Post([FromBody] ClientDto clientDto)
        {
            var client = await ClientService.AddClient(DtoMappingProvider.Mapper
                .From(clientDto)
                .AdaptToType<Client>());
            
            return DtoMappingProvider.Mapper.From(client).AdaptToType<ClientDto>();
        }
        
        
        [HttpPut]
        [Route("")]
        public async Task<ActionResult<ClientDto>> Put([FromBody] ClientDto clientDto)
        {
            var client = await ClientService.UpdateClient(DtoMappingProvider.Mapper
                .From(clientDto)
                .AdaptToType<Client>());
            
            return DtoMappingProvider.Mapper.From(client).AdaptToType<ClientDto>();
        }
    }
}