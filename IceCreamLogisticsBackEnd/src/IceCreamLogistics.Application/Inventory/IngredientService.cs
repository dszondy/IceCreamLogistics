using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public class IngredientService : IIngredientService
    {
        public IngredientService(IIngredientRepository IngredientRepository)
        {
            _ingredientRepository = IngredientRepository;
        }

        private readonly IIngredientRepository _ingredientRepository;
        
        public Task<IEnumerable<Ingredient>> Search(string text, LazyLoadingParams loadingParams)
        {
            return _ingredientRepository.GetIngredientsBySearch(text, loadingParams);
        }

        public Task<Ingredient> AddIngredient(IngredientCreate ingredient)
        {
            return _ingredientRepository.Create(ingredient);
        }
        public Task<Ingredient> UpdateIngredient(IngredientCreate ingredient)
        {
            return _ingredientRepository.Update(ingredient);
        }
    }
}