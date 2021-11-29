using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public interface IInventoryRepository
    {
        Task AddToInventory(IngredientAmountEdit item);
        Task SetInventory(IngredientAmountEdit item);
        Task Deplete(IEnumerable<IngredientAmountEdit> ingredientAmount);

    }
}