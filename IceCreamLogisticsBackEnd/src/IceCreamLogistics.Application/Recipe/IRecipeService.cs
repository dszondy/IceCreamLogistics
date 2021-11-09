using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public interface IRecipeService
    {
        
        Task<IEnumerable<Recipe>> Search(string text, LazyLoadingParams loadingParams);
        Task<RecipeDetails> Create(RecipeCreate recipe);
        Task<RecipeDetails> Update(RecipeCreate recipe);
        Task<RecipeDetails> Get(int id);
        
    }
}