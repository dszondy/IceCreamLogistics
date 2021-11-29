using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Application.Model;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    class InventoryService : IInventoryService
    {
        private readonly IInventoryStatusRepository _inventoryStatusRepository;
        private readonly IInventoryRepository _inventoryRepository;


        public InventoryService(IInventoryStatusRepository inventoryStatusRepository, IInventoryRepository inventoryRepository)
        {
            _inventoryStatusRepository = inventoryStatusRepository;
            _inventoryRepository = inventoryRepository;
        }

        public Task<IEnumerable<InventoryStatus>> SearchInventory(InventorySearchParams searchParams, LazyLoadingParams lazyLoadingParams)
        {
            return _inventoryStatusRepository.SearchInventory(searchParams, lazyLoadingParams);
        }

        public Task<InventoryWarning> GetInventoryWarning()
        {
            return _inventoryStatusRepository.GetInventoryWarning();
        }

        public async Task<InventoryStatus>  AddToInventory(IngredientAmountEdit item)
        {
            await  _inventoryRepository.AddToInventory(item);
            return await _inventoryStatusRepository.GetInventoryStatus(item.IngredientId);
        }

        public async Task<InventoryStatus> SetInventory(IngredientAmountEdit item)
        {
            await  _inventoryRepository.SetInventory(item);
            return await _inventoryStatusRepository.GetInventoryStatus(item.IngredientId);        }

        public Task DepleteMany(IEnumerable<IngredientAmountEdit> ingredientAmounts)
        {
            return  _inventoryRepository.Deplete(ingredientAmounts);
        }
    }
}