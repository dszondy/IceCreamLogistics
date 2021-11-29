using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Infrastructure.DAL;
using Microsoft.EntityFrameworkCore;

namespace IceCreamLogistics.Application
{
    class InventoryRepository : IInventoryRepository
    {
        private readonly IceCreamLogisticsDbContext _dbContext;

        public InventoryRepository(IceCreamLogisticsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task AddToInventory(IngredientAmountEdit item)
        {
            var dbo = await _dbContext.Ingredients.FirstAsync(x=> x.Id == item.IngredientId);
            dbo.AmountOnHand += item.Amount;
            await _dbContext.SaveChangesAsync();
        }

        public async Task SetInventory(IngredientAmountEdit item)
        {
            var dbo = await _dbContext.Ingredients.FirstAsync(x=> x.Id == item.IngredientId);
            dbo.AmountOnHand = item.Amount;
            await _dbContext.SaveChangesAsync();        }

        public async Task Deplete(IEnumerable<IngredientAmountEdit> ingredientAmount)
        {
            var dbos = await _dbContext.Ingredients
                .Where(x => ingredientAmount
                    .Select(y => y.IngredientId)
                    .Contains(x.Id))
                .ToArrayAsync();

            foreach (var dbo in dbos)
            {
                dbo.AmountOnHand -= ingredientAmount
                    .Where(x => x.IngredientId == dbo.Id)
                    .Sum(x =>x.Amount);
            }

            await _dbContext.SaveChangesAsync();
        }
    }
}