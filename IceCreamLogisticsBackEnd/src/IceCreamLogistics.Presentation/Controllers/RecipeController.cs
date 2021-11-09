using System;
using System.Linq;
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
        public async Task<ActionResult<LazyLoadingResponse<RecipeDto>>> List([FromQuery] LazyLoadingParamsDto lazyLoadingParamsDto, [FromQuery]string? search = "")
        {
            var recipes =
                (await RecipeService
                    .Search(search ?? string.Empty, lazyLoadingParamsDto.MapTo<LazyLoadingParams>()))
                    .Select(x => x.MapTo<RecipeDto>());
            
            return recipes.ToLazyLoadingResponse(lazyLoadingParamsDto);
        }
        
        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<RecipeDetailsDto>> Get(int id)
        {
            var recipe = await RecipeService.Get(id);
            return recipe.MapTo<RecipeDetailsDto>();
        }

        
        [HttpPost]
        [Route("")]
        public async Task<ActionResult<RecipeDetailsDto>> Post([FromBody] RecipeCreateDto recipeDto)
        {
            var recipe = await RecipeService.Create(recipeDto.MapTo<RecipeCreate>());

            return recipe.MapTo<RecipeDetailsDto>();
        }
        
        
        [HttpPut]
        [Route("{id}")]
        public async Task<ActionResult<RecipeDetailsDto>> Put(int id, [FromBody] RecipeCreateDto recipeDto)
        {
            var recipe = await RecipeService.Update(recipeDto.MapTo<RecipeCreate>());
            
            return recipe.MapTo<RecipeDetailsDto>();
        }
    }
}