using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application.Mixing
{
    public class MixingInventoryCheckService : IMixingInventoryCheckService
    {
        private readonly IIngredientRepository _ingredientRepository;
        private readonly IRecipeRepository _recipeRepository;

        public MixingInventoryCheckService(IIngredientRepository ingredientRepository, IRecipeRepository recipeRepository)
        {
            _ingredientRepository = ingredientRepository;
            _recipeRepository = recipeRepository;
        }

        public async Task<IEnumerable<MixingInventoryCheck>> CheckInventory(MixingBatchCreate batch) {
            var recipes = await _recipeRepository.GetMany(batch.Members
                .SelectMany(x => x.Items
                .Select(item => item.RecipeId)));
            
            var ingredients = await _ingredientRepository.GetMany(recipes
                .SelectMany(x => x.Ingredients
                .Select(y => y.IngredientId).Distinct()));
            
            return batch.Members.SelectMany(x =>x.Items)
                .GroupBy(x => x.RecipeId)
                .Select(x => new {
                    Recipe = recipes.First(r => r.Id == x.Key),
                    Amount = x.Sum(y => y.Amount)
                })
                .SelectMany( x =>x.Recipe.Ingredients.Select(y => new {
                    Ingredient = ingredients
                        .First(i => i.Id == y.IngredientId),
                    Amount = y.Amount * x.Amount
                }))
                .Select(x => new MixingInventoryCheck(){
                    Ingredient = x.Ingredient,
                    AmountRequired = x.Amount
                })
                .ToList();
            
        }
    }
}