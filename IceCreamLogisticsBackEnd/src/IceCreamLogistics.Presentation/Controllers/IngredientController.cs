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
    [Route("ingredients")]    
    [ApiController]    
    public class IngredientController: Controller
    {
        public IngredientController(IIngredientService ingredientService)
        {
            _ingredientService = ingredientService;
        }

        private readonly IIngredientService _ingredientService;

        [HttpGet]
        [Route("")]
        public async Task<ActionResult<LazyLoadingResponse<Ingredient>>> Get([FromQuery] LazyLoadingParamsDto lazyLoadingParamsDto, [FromQuery]string? search = "")
        {
            var ingredients = await _ingredientService.Search(search ?? string.Empty,
                lazyLoadingParamsDto.MapTo<LazyLoadingParams>());
            return ingredients.ToLazyLoadingResponse(lazyLoadingParamsDto);
        }
        
        
        [HttpPost]
        [Route("")]
        public async Task<ActionResult<IngredientDto>> Post([FromBody] IngredientCreateDto ingredientDto)
        {
            var ingredient = await _ingredientService.AddIngredient(ingredientDto.MapTo<IngredientCreate>());
            
            return DtoMappingProvider.Mapper.From(ingredient).AdaptToType<IngredientDto>();
        }
        
        
        [HttpPut]
        [Route("")]
        public async Task<ActionResult<IngredientDto>> Put([FromBody] IngredientCreateDto ingredientDto)
        {
            var ingredient = await _ingredientService.UpdateIngredient(ingredientDto.MapTo<IngredientCreate>());
            
            return ingredient.MapTo<IngredientDto>();
        }
    }
}