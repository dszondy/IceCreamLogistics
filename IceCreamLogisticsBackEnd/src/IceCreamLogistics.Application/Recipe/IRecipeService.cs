using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public interface IRecipeService
    {
        
        Task<IEnumerable<Recipe>> Search(string text, LazyLoadingParams loadingParams);
        Task<Recipe> AddRecipe(Recipe recipe);
        Task<Recipe> UpdateRecipe(Recipe recipe);
    }
}