using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public interface IRecipeAmountRepository
    {
        Task<IEnumerable<RecipeAmount>> GetRecipeAmountsOfIncompleteItems();
        Task<IEnumerable<RecipeAmount>> GetRecipeAmountsOfItemsInMixing();
    }
}