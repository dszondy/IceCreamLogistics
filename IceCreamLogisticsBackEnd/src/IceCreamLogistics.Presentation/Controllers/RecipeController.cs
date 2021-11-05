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
    [Route("recipes")]    
    [ApiController]    
    public class RecipeController: Controller
    {
        public RecipeController(IRecipeService recipeService)
        {
            RecipeService = recipeService;
        }

        private IRecipeService RecipeService { get; }

        [HttpGet]
        [Route("")]
        public async Task<ActionResult<LazyLoadingResponse<Recipe>>> Get([FromQuery] LazyLoadingParamsDto lazyLoadingParamsDto, [FromQuery]string? search = "")
        {
            var recipes = await RecipeService.Search(search ?? string.Empty, DtoMappingProvider.Mapper
                .From(lazyLoadingParamsDto)
                .AdaptToType<LazyLoadingParams>());
            return recipes.ToLazyLoadingResponse(lazyLoadingParamsDto);
        }
        
        
        [HttpPost]
        [Route("")]
        public async Task<ActionResult<RecipeDto>> Post([FromBody] RecipeDto recipeDto)
        {
            var recipe = await RecipeService.AddRecipe(DtoMappingProvider.Mapper
                .From(recipeDto)
                .AdaptToType<Recipe>());
            
            return DtoMappingProvider.Mapper.From(recipe).AdaptToType<RecipeDto>();
        }
        
        
        [HttpPut]
        [Route("")]
        public async Task<ActionResult<RecipeDto>> Put([FromBody] RecipeDto recipeDto)
        {
            var recipe = await RecipeService.UpdateRecipe(DtoMappingProvider.Mapper
                .From(recipeDto)
                .AdaptToType<Recipe>());
            
            return DtoMappingProvider.Mapper.From(recipe).AdaptToType<RecipeDto>();
        }
    }
}