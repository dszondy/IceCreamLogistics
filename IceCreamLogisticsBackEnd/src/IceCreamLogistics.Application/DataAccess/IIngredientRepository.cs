using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public interface IIngredientRepository
    {
        Task<IEnumerable<Ingredient>> GetIngredientsBySearch(string text, LazyLoadingParams loadingParams);
        Task<Ingredient> Create(IngredientCreate ingredient);
        Task<Ingredient> Update(IngredientCreate ingredient);
        
        Task<IEnumerable<Ingredient>> GetMany(IEnumerable<int> ids);
    }
}