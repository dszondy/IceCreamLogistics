using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public interface IRecipeRepository
    {
        Task<IEnumerable<Recipe>> GetRecipesBySearch(string text, LazyLoadingParams loadingParams);
        Task<Recipe> Create(RecipeCreate recipe);
        Task<Recipe> Update(RecipeCreate recipe);
        Task<RecipeDetails> Get(int id);
        Task<IEnumerable<RecipeDetails>> GetMany(IEnumerable<int> ids);
    }
}