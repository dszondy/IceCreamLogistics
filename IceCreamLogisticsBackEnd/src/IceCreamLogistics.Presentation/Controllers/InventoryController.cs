using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Application;
using IceCreamLogistics.Application.Model;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Presentation.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace IceCreamLogistics.Presentation.Controllers
{
    [Route("inventory")]    
    [ApiController]    
    public class InventoryController : Controller
    {
        private readonly IInventoryService _inventoryService;

        public InventoryController(IInventoryService inventoryService)
        {
            _inventoryService = inventoryService;
        }

        [HttpGet]
        [Route("")]
        public async Task<ActionResult<LazyLoadingResponse<InventoryStatusDto>>> SearchInventory(
            [FromQuery] InventorySearchParamsDto searchParams, [FromQuery] LazyLoadingParamsDto lazyLoadingParams)
        {
            var result = await _inventoryService.SearchInventory(
                new InventorySearchParams(),
                lazyLoadingParams.MapTo<LazyLoadingParams>());
            return Ok(
                result
                    .Select(x => x.MapTo<InventoryStatusDto>())
                    .ToLazyLoadingResponse(lazyLoadingParams));
        }

        [HttpGet]
        [Route("warning")]
        public async Task<ActionResult<InventoryWarningDto>> GetInventoryWarning()
        {
            return (await _inventoryService.GetInventoryWarning())
                .MapTo<InventoryWarningDto>();
        }
        
        [HttpPost]
        [Route("{id}/set")]
        public async Task<ActionResult<InventoryStatusDto>> SetInventory(int id, [FromBody] decimal amount)
        { 
            var result = await _inventoryService.SetInventory(new IngredientAmountEdit(){IngredientId = id, Amount = amount});
            return result.MapTo<InventoryStatusDto>();
        }
        
        [HttpPost]
        [Route("{id}/add")]
        public async Task<ActionResult<InventoryStatusDto>> AddToInventory(int id, [FromBody] decimal amount)
        {
            var result = await _inventoryService.AddToInventory(new IngredientAmountEdit(){IngredientId = id, Amount = amount});
            return result.MapTo<InventoryStatusDto>();
        }
    }
}