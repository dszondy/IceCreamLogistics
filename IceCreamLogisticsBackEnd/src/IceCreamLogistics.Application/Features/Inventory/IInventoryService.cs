using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Application.Model;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public interface IInventoryService
    {
        Task<IEnumerable<InventoryStatus>> SearchInventory(InventorySearchParams searchParams, LazyLoadingParams lazyLoadingParams);
        Task<InventoryWarning> GetInventoryWarning();
        Task<InventoryStatus> AddToInventory(IngredientAmountEdit item);
        Task<InventoryStatus>  SetInventory(IngredientAmountEdit item);
        Task  DepleteMany(IEnumerable<IngredientAmountEdit> ingredientAmounts);

    }
}