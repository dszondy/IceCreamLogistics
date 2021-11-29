using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public interface IIngredientService
    {
        
        Task<IEnumerable<Ingredient>> Search(string text, LazyLoadingParams loadingParams);
        Task<Ingredient> AddIngredient(IngredientCreate ingredient);
        Task<Ingredient> UpdateIngredient(IngredientCreate ingredient);
    }
}