using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Application;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Infrastructure.DAL.Repositories
{
    internal class DashboardValuesRepository : IDashboardValuesRepository

    {
    private readonly IceCreamLogisticsDbContext _dbContext;

    public DashboardValuesRepository(IceCreamLogisticsDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public Task<IEnumerable<DashboardValue>> GetPopularRecipesLast30Days()
    {
        var values = from order in _dbContext.Orders
            join orderItem in _dbContext.OrderItems
                on order.Id equals orderItem.OrderId
            join recipe in _dbContext.Recipes
                on orderItem.RecipeId equals recipe.Id
            where order.OrderCreated >= DateTime.Now.AddDays(-30)
            group recipe by new
            {
                recipe.Id,
                recipe.Name
            }
            into g
            select new DashboardValue
            {
                Label = g.Key.Name,
                Value = g.Count()
            };
        return Task.FromResult(values.AsEnumerable());
    }

    }
}