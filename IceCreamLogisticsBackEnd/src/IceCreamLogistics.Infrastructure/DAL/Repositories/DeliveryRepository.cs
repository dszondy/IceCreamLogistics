using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Application;
using IceCreamLogistics.Application.Model;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Infrastructure.DAL.DBOs;
using IceCreamLogistics.Presentation.DTOs;
using Mapster;
using Microsoft.EntityFrameworkCore;

namespace IceCreamLogistics.Infrastructure.DAL.Repositories
{
    class DeliveryRepository : IDeliveryRepository
    {
        private readonly IceCreamLogisticsDbContext _dbContext;

        public DeliveryRepository(IceCreamLogisticsDbContext dbContext)
        {
            _dbContext = dbContext;
        }


        public async  Task<DeliveryDetails> Get(int id)
        {
            var result = _dbContext.Deliveries
                .Include(x => x.Orders).ThenInclude(x => x.Client).ThenInclude(x => x.Address)
                .Include(x => x.Orders).ThenInclude(x => x.Items).ThenInclude(x => x.Recipe)
                .Include(x => x.Orders).ThenInclude(x => x.Items).ThenInclude(x => x.Cancellations)
                .First(x => x.Id == id);
            return result.MapTo<DeliveryDetails>();
        }

        public async Task<DeliveryDetails> Create(DeliveryEdit delivery)
        {
            var deliveryDbo = new DeliveryDbo()
            {
                Name = delivery.Name,
                Completed = delivery.Completed,
                Orders = await _dbContext.Orders
                    .Where(x => delivery.OrderIds.Contains(x.Id))
                    .ToArrayAsync()
            };
            _dbContext.Deliveries.Add(deliveryDbo);
            await _dbContext.SaveChangesAsync();
            return await Get(deliveryDbo.Id);
        }

        public async Task<DeliveryDetails> Update(int id, DeliveryEdit delivery)
        {
            
            var deliveryDbo = _dbContext.Deliveries.First(x => x.Id == id);
            
            deliveryDbo.Name = delivery.Name;
            deliveryDbo.Completed = delivery.Completed;
            deliveryDbo.Orders = await _dbContext.Orders
                .Where(x => delivery.OrderIds.Contains(x.Id))
                .ToArrayAsync();
            
            await _dbContext.SaveChangesAsync();
            return await Get(deliveryDbo.Id);
        }

        public async Task<IEnumerable<DeliveryShallow>> List(DeliverySearchParams searchParams, LazyLoadingParams lazyLoadingParams)
        {
            IQueryable<DeliveryDbo> result = _dbContext.Deliveries
                .Include(x => x.Orders).ThenInclude(x => x.Client).ThenInclude(x => x.Address)
                .Include(x => x.Orders).ThenInclude(x => x.Items).ThenInclude(x => x.Recipe);
            
            result = result.ApplyLazyLoading(lazyLoadingParams);
            
            return result.ToArray().Select(x => new DeliveryShallow(){
                Id = x.Id,
                Name = x.Name,
                Completed = x.Completed,
                OrderCount = x.Orders.Count,
                ClientCount = x.Orders.Select(order => order.Client.Id).Distinct().Count(),
                RecipeCount = x.Orders.SelectMany(order => order.Items).Select(item => item.Recipe.Id).Distinct().Count()
            });
        }
    }
}