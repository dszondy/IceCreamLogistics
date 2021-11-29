using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Application.Model;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Infrastructure.DAL;
using IceCreamLogistics.Infrastructure.DAL.DBOs;
using Microsoft.EntityFrameworkCore;

namespace IceCreamLogistics.Application
{
    class InventoryStatusRepository : IInventoryStatusRepository
    {
        private readonly IceCreamLogisticsDbContext _dbContext;

        public InventoryStatusRepository(IceCreamLogisticsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<InventoryWarning> GetInventoryWarning()
        {
            var items = GetInventoryStatusesQueryable();

            if (await items.AnyAsync(x => x.AmountOnHand < x.AmountRequired))
            {
                return InventoryWarning.NotEnoughForPendingOrders;
            }
            
            if (await items.AnyAsync(x => x.AmountOnHand - x.AmountRequired < x.WarningThreshold))
            {
                return InventoryWarning.ThresholdReached;
            }


            return InventoryWarning.Ok;

        }
        public async Task<IEnumerable<InventoryStatus>> SearchInventory(InventorySearchParams searchParams, LazyLoadingParams lazyLoadingParams)
        {
            var amounts = GetInventoryStatusesQueryable();

            return await amounts
                .ApplyLazyLoading(lazyLoadingParams)
                .ToArrayAsync();
        }

        public Task<InventoryStatus> GetInventoryStatus(int id)
        {
            return GetInventoryStatusesQueryable().FirstAsync(x => x.Id == id);
        }

        private IQueryable<InventoryStatus> GetInventoryStatusesQueryable()
        {
            return from order in _dbContext.OrderItems
                join recipeIngredient in _dbContext.RecipeIngredients
                    on order.RecipeId equals recipeIngredient.RecipeId
                join ingredient in _dbContext.Ingredients 
                    on recipeIngredient.IngredientId equals ingredient.Id
                select new
                {
                    AmountRequired = (order.Amount-order.Cancellations.Sum(x => x.Amount)-order.MixedAmount)*recipeIngredient.Amount, 
                    ingredient.Name, 
                    ingredient.Id,
                    ingredient.MeasurementUnit,
                    ingredient.WarningThreshold,
                    ingredient.AmountOnHand,
                    ingredient.QuantityPerPackage
                } into x
                group x by new {x.Id, x.Name, x.MeasurementUnit, x.WarningThreshold, x.AmountOnHand, x.QuantityPerPackage} into g
                select new InventoryStatus()
                {
                    Id = g.Key.Id, 
                    AmountRequired = g.Sum(x => x.AmountRequired), 
                    Name = g.Key.Name, 
                    MeasurementUnit = g.Key.MeasurementUnit, 
                    WarningThreshold = g.Key.WarningThreshold, 
                    AmountOnHand = g.Key.AmountOnHand,
                    QuantityPerPackage = g.Key.QuantityPerPackage
                };
        }
    }
}