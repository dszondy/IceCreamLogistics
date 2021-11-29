using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Application.Mixing;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application.Manufacturing
{
    public class MixingService : IMixingService
    {
        private readonly IMixingRepository _mixingRepository;
        private readonly IOrderProgressRepository _orderProgressRepository;
        private readonly IRecipeRepository _recipeRepository;
        private readonly IInventoryRepository _inventoryRepository;

        public MixingService(IMixingRepository mixingRepository, IOrderProgressRepository orderProgressRepository, IRecipeRepository recipeRepository, IInventoryRepository inventoryRepository)
        {
            _mixingRepository = mixingRepository;
            _orderProgressRepository = orderProgressRepository;
            _recipeRepository = recipeRepository;
            _inventoryRepository = inventoryRepository;
        }

        public async Task<int> Create(MixingBatchCreate mixingBatch)
        {
            mixingBatch.Created = DateTime.Now;
            var id = await _mixingRepository.Create(mixingBatch);
            await _orderProgressRepository.RegisterSelectedMixingAmounts(mixingBatch.Members);
            return id;
        }

        public Task<IEnumerable<MixingBatchShallow>> List(MixingSearchParams mixingSearchParams, LazyLoadingParams loadingParams)
        {
            return _mixingRepository.List(mixingSearchParams, loadingParams);
        }

        public Task<MixingBatchDetails> Get(int id)
        {
            return _mixingRepository.Get(id);
        }

        public async Task<MixingBatchDetails> AdministerAbsolute(int id, IEnumerable<MixingBatchCreateMember> members)
        {

                var batch = await _mixingRepository.Get(id);
            
            var items = batch.Members.SelectMany(member => member.Items.Select(item => new
            {
                OrderId = member.Order.Id, 
                RecipeId = item.Recipe.Id,
                Amount = item.CompletedAmount
            })).ToArray();

            var membersDeltas = members.Select(member => new MixingBatchCreateMember()
            {
                OrderId = member.OrderId,
                Items = member.Items.Select(item => new MixingBatchCreateItem()
                {
                    RecipeId = item.RecipeId,
                    Amount = item.Amount - items
                        .Where(i => i.OrderId == member.OrderId && i.RecipeId == item.RecipeId)
                        .Sum(i => i.Amount),
                })
            });

            var recipes = await _recipeRepository
                .GetMany(membersDeltas
                    .SelectMany(x => x.Items)
                    .Select(x => x.RecipeId)
                    .Distinct());
            
            await _inventoryRepository.Deplete(membersDeltas
                .SelectMany(x => x.Items)
                .SelectMany(x => recipes
                    .First(recipe => recipe.Id == x.RecipeId)
                    .Ingredients.Select(ingredient => new IngredientAmountEdit()
                    {
                        IngredientId = ingredient.IngredientId,
                        Amount = x.Amount * ingredient.Amount
                    })));

            await _orderProgressRepository.RegisterCompletedMixingAmounts(membersDeltas);
            
            await _mixingRepository.AdministerAbsolute(id, members);

            return await Get(id);
        }
    }
}