using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Application;
using IceCreamLogistics.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Scaffolding;

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

    public async Task<IEnumerable<DashboardValue>> GetOrdersCancelledLast30()
    {
        var cancelled =  await _dbContext.Orders
                .Include(x=> x.Items)
                .ThenInclude(x => x.Cancellations)
                .Where(order => order.OrderCreated >= DateTime.Now.AddDays(-30))
                .SumAsync(x => x.Items.Sum(y => y.Cancellations.Sum(z => z.Amount)));
        var completed = await  _dbContext.Orders
            .Include(x=> x.Items)
            .ThenInclude(x => x.Cancellations)
            .Where(order => order.OrderCreated >= DateTime.Now.AddDays(-30))
            .SumAsync(x => x.Items.Sum(y => y.MixedAmount));
        var totalAmount  = await _dbContext.Orders
            .Include(x=> x.Items)
            .ThenInclude(x => x.Cancellations)
            .Where(order => order.OrderCreated >= DateTime.Now.AddDays(-30))
            .SumAsync(x => x.Items.Sum(y => y.Amount));
        
        return new List<DashboardValue>
        {
            new DashboardValue
            {
                Label = "Cancelled",
                Value = cancelled
            },
            new DashboardValue
            {
                Label = "Completed",
                Value = completed
            },
            new DashboardValue
            {
                Label = "Pending",
                Value =  totalAmount-completed-cancelled
            }
        };
    }

    // bucket aggregate by week
    // values of last 10 weeks
    // 1 value per day
    public async Task<IEnumerable<DashboardValue>> GetOrdersByWeekLast10()
    {
        // day ranges for each week last 10 weeks
        var dayRanges = Enumerable.Range(0, 10).Select(x => DateTime.Now.AddDays(-7 * x));
        
        // get total amount of orders inside each day range
        var query = new Func<DateTime, Task<decimal>>((DateTime dateRangeStart) =>  
            _dbContext.Orders
                .Include(x => x.Items)
                .Where(x => x.OrderCreated >= dateRangeStart)
                .Where(x => x.OrderCreated < dateRangeStart.AddDays(7))
                .SumAsync(x => x.Items.Sum(y => y.Amount)));
        
        var results = new List<DashboardValue>();
        foreach (var result in dayRanges.Select(query))
        {
            results.Add(new DashboardValue
            {
                Label = result.Result.ToString("yyyy-MM-dd"),
                Value = await result
            });
        }
        return results;
    }


    public Task<IEnumerable<DashboardValue>> GetOrdersByClientLast30Days()
    {
        var values = from order in _dbContext.Orders
            join client in _dbContext.Clients
                on order.ClientId equals client.Id
            where order.OrderCreated >= DateTime.Now.AddDays(-30)
            group client by new
            {
                client.Id,
                client.Name
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