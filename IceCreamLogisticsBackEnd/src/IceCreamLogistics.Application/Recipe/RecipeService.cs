using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public class RecipeService : IRecipeService
    {
        public RecipeService(IRecipeRepository recipeRepository)
        {
            RecipeRepository = recipeRepository;
        }

        private IRecipeRepository RecipeRepository { get; }
        public Task<IEnumerable<Recipe>> Search(string text, LazyLoadingParams loadingParams)
        {
            return RecipeRepository.GetRecipesBySearch(text, loadingParams);
        }

        public Task<Recipe> AddRecipe(Recipe recipe)
        {
            return RecipeRepository.Create(recipe);
        }
        public Task<Recipe> UpdateRecipe(Recipe recipe)
        {
            return RecipeRepository.Update(recipe);
        }
    }
}