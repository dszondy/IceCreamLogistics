using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public class RecipeService : IRecipeService
    {
        public RecipeService(IRecipeRepository recipeRepository)
        {
            _recipeRepository = recipeRepository;
        }

        private readonly IRecipeRepository _recipeRepository;
        public Task<IEnumerable<Recipe>> Search(string text, LazyLoadingParams loadingParams)
        {
            return _recipeRepository.GetRecipesBySearch(text, loadingParams);
        }

        public async Task<RecipeDetails> Create(RecipeCreate recipe)
        {
            var result = await  _recipeRepository.Create(recipe);
            return await Get(result.Id);
        }
        public async Task<RecipeDetails> Update(RecipeCreate recipe)
        {
            var result = await _recipeRepository.Update(recipe);
            return await Get(result.Id);
        }

        public Task<RecipeDetails> Get(int id)
        {
            return _recipeRepository.Get(id);
        }
    }
}