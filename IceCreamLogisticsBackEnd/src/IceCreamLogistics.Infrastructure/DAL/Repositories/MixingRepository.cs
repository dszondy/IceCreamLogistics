using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Application;
using IceCreamLogistics.Application.Mixing;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Infrastructure.DAL.DBOs;
using Microsoft.EntityFrameworkCore;

namespace IceCreamLogistics.Infrastructure.DAL.Repositories
{
    internal class MixingRepository : IMixingRepository
    {
        private readonly IceCreamLogisticsDbContext _dbContext;

        public MixingRepository(IceCreamLogisticsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        


        public async Task<int> Create(MixingBatchCreate batch)
        {
            var mixingBatch = batch.MapTo<MixingBatchDbo>();
            await _dbContext.MixingBatches.AddAsync(mixingBatch);

            await _dbContext.SaveChangesAsync();
            var members = batch.Members.Select(x => new MixingMemberDbo()
            {
                MixingBatchId = mixingBatch.Id,
                OrderId = x.OrderId
            }).ToArray();
            
            _dbContext.MixingBatchMembers.AddRange(members);
            await _dbContext.SaveChangesAsync();
            
            _dbContext.MixingItems
                .AddRange(batch.Members
                    .SelectMany(x => x.Items.Select(item =>new MixingItemDbo()
                    {
                        RecipeId = item.RecipeId,
                        MixingMemberId = members.First(member =>member.OrderId == x.OrderId).Id,
                        Amount = item.Amount
                    })));
            await _dbContext.SaveChangesAsync();
            return mixingBatch.Id;
        }

        public async Task<MixingBatchDetails> Get(int id)
        { 
            var mixingBatchDbo = await _dbContext.MixingBatches
                .Include(x => x.Members)
                .ThenInclude(x => x.Order)
                .ThenInclude(x => x.Client)
                .Include(x => x.Members)
                .ThenInclude(x => x.Items)
                .ThenInclude(x => x.Recipe)
                .FirstAsync(x => x.Id == id);

            return mixingBatchDbo.MapTo<MixingBatchDetails>();
        }

        public async Task<IEnumerable<MixingBatchShallow>> List(MixingSearchParams mixingSearchParams, LazyLoadingParams loadingParams)
        {
            var batches = _dbContext.MixingBatches
                .Include(x => x.Members)
                .ThenInclude(x => x.Items).AsQueryable();
            
            batches = batches.OrderByDescending(x => x.Created);
            return batches.ApplyLazyLoading(loadingParams).Select(x => new MixingBatchShallow()
            {
                Id = x.Id,
                Created = x.Created,
                Name = x.Name,
                OrderCount = x.Members.Count,
                RecipeCount = x.Members.SelectMany(member => member.Items).GroupBy(item => item.RecipeId).Count(),
                TotalAmount = x.Members.SelectMany(member => member.Items).Sum(item => item.Amount),
                TotalCompletedAmount = x.Members.SelectMany(member => member.Items).Sum(item => item.CompletedAmount),
            });
        }

        public async Task AdministerAbsolute(int batchId, IEnumerable<MixingBatchCreateMember> members)
        {
           var membersAffected = _dbContext.MixingBatchMembers
               .Include(x => x.Items)
               .Where(x => x.MixingBatchId == batchId)
               .Where(x => members.Select(y => y.OrderId)
                   .Contains(x.OrderId));
           await membersAffected.ForEachAsync(x =>
           {
               var items = x.Items.ToArray();
               foreach (var item in x.Items)
               {
                   item.CompletedAmount = members
                       .First(y => y.OrderId == x.OrderId).Items
                       .First(y => y.RecipeId == item.RecipeId)
                       .Amount;
               }
           });
           await _dbContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<AssociatedBatch>> GetAssociatedBatches(int orderId)
        {
            var mixingBatches= _dbContext.MixingBatches
                .Include(x => x.Members)
                .ThenInclude(x => x.Order)
                .ThenInclude(x => x.Client)
                .Include(x => x.Members)
                .ThenInclude(x => x.Items)
                .ThenInclude(x => x.Recipe)
                .Where(x => x.Members.Any(member => member.OrderId == orderId));

            return await mixingBatches.Select(x => new AssociatedBatch()
            {
                MixingBatchId = x.Id,
                Name = x.Name,
                Created = x.Created,
                BatchCompleted = x.IsCompleted,
                Items = x.Members.First(member => member.OrderId == orderId).Items
                    .Select(item => item.MapTo<MixingBatchItem>())
            }).ToArrayAsync();
        }
    }
}