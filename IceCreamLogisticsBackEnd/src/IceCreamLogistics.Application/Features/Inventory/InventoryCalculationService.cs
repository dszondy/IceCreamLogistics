using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    class InventoryCalculationService
    {
        private readonly IRecipeRepository _recipeRepository;
        private readonly IOrderService _orderService;
        private readonly IRecipeAmountRepository _recipeAmountRepository;

        public InventoryCalculationService(IRecipeRepository recipeRepository, IOrderService orderService, IRecipeAmountRepository recipeAmountRepository)
        {
            _recipeRepository = recipeRepository;
            _orderService = orderService;
            _recipeAmountRepository = recipeAmountRepository;
        }

        public async Task<IEnumerable<IngredientAmount>> GetIngredientAmountsNeeded(IEnumerable<RecipeAmount> recipeAmounts)
        {
            recipeAmounts = recipeAmounts.GroupBy(x => x.RecipeId).Select(x => new RecipeAmount()
            {
                RecipeId = x.Key,
                Amount = x.Sum(y => y.Amount)
            }).ToList();
            
            var recipeIds = recipeAmounts.Select(x => x.RecipeId);
            var recipesById = (await _recipeRepository
                .GetMany(recipeIds))
                .ToImmutableDictionary(x => x.Id, x => x);
            
            return recipeAmounts
                .SelectMany(recipeAmount => recipesById[recipeAmount.RecipeId]
                    .Ingredients
                    .Select(ingredinet => new IngredientAmount()
                    {
                        Ingredient = ingredinet,
                        Amount =  ingredinet.Amount * recipeAmount.Amount
                    }))
                .GroupBy(x => x.Ingredient.IngredientId)
                .Select(x => new IngredientAmount()
                {
                    Ingredient = x.First().Ingredient,
                    Amount = x.Sum(y => y.Amount)
                });

        }

        public Task<IEnumerable<IngredientAmount>> GetIngredientAmountsForBatch(MixingBatchCreate batch)
        {
            return GetIngredientAmountsNeeded(batch.Members.SelectMany(x => x.Items).Select(x => new RecipeAmount()
            {
                RecipeId = x.RecipeId,
                Amount = x.Amount
            }));
        }

        public async Task<IEnumerable<IngredientAmount>> GetIngredientAmountsOfIncompleteItems()
        {
            var recipeAmounts = await _recipeAmountRepository.GetRecipeAmountsOfIncompleteItems();
            return await GetIngredientAmountsNeeded(recipeAmounts);
        }

        public async Task<IEnumerable<IngredientAmount>> GetIngredientAmountsOfItemsInMixing()
        {
            var recipeAmounts = await _recipeAmountRepository.GetRecipeAmountsOfItemsInMixing();
            return await GetIngredientAmountsNeeded(recipeAmounts);        }
    }
}