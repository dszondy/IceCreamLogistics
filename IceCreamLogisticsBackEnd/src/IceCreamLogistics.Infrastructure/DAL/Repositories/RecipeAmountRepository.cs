using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Application;
using IceCreamLogistics.Domain;
using Microsoft.EntityFrameworkCore;

namespace IceCreamLogistics.Infrastructure.DAL.Repositories
{
    class RecipeAmountRepository : IRecipeAmountRepository
    {
        private readonly IceCreamLogisticsDbContext _dbContext;

        public RecipeAmountRepository(IceCreamLogisticsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<RecipeAmount>> GetRecipeAmountsOfIncompleteItems()
        {
            return _dbContext.OrderItems.Include(x => x.Cancellations)
                .GroupBy(x => x.RecipeId)
                .Select(x => new RecipeAmount()
                {
                    RecipeId = x.Key,
                    Amount = x.Sum(y => y.Amount) 
                             - x.Sum(y => y.Cancellations.Sum(z => z.Amount))
                             - x.Sum(y => y.MixedAmount)
                }).AsEnumerable();
        }

        public async Task<IEnumerable<RecipeAmount>> GetRecipeAmountsOfItemsInMixing()
        {
            return _dbContext.OrderItems.Include(x => x.Cancellations)
                .GroupBy(x => x.RecipeId)
                .Select(x => new RecipeAmount()
                {
                    RecipeId = x.Key,
                    Amount = x.Sum(y => y.SelectedMixingAmount) 
                             - x.Sum(y => y.MixedAmount)
                }).AsEnumerable();        
        }
    }
}