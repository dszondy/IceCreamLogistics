using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Infrastructure.DAL.DBOs;

namespace IceCreamLogistics.Infrastructure.DAL.Repositories
{
    internal class MixingBatchesRepository : IMixingBatchesRepository
    {
        public MixingBatchesRepository(IceCreamLogisticsDbContext dbContext)
        {
            DbContext = dbContext;
        }

        private IceCreamLogisticsDbContext DbContext { get; }
        


        public async Task Create(MixingBatchCreate batch)
        {
            var mixingBatch = new MixingBatchDbo();
                await DbContext.MixingBatches.AddAsync(mixingBatch);

            await DbContext.SaveChangesAsync();
            var members = batch.Members.Select(x => new MixingBatchMemberDbo()
            {
                MixingBatchId = mixingBatch.Id,
                OrderId = x.OrderId
            }).ToArray();
            
            DbContext.MixingBatchMembers.AddRange(members);
            await DbContext.SaveChangesAsync();
            
            DbContext.OrderItems
                .AddRange(batch.Members
                    .SelectMany(x => x.Items.Select(item =>new OrderItemDbo()
                    {
                        RecipeId = item.RecipeId,
                        MixingBatchMemberId = members
                            .First(member =>member.OrderId == x.OrderId)
                            .Id,
                        Amount = item.Amount
                    })));
            await DbContext.SaveChangesAsync();

        }
    }
}