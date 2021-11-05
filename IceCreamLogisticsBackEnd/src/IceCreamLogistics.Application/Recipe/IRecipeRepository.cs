using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public interface IRecipeRepository
    {
        Task<IEnumerable<Recipe>> GetRecipesBySearch(string text, LazyLoadingParams loadingParams);
        Task<Recipe> Create(Recipe recipe);
        Task<Recipe> Update(Recipe recipe);
    }
}