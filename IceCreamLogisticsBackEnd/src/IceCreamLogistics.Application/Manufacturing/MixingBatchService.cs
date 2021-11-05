using System;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Infrastructure.DAL.Repositories;

namespace IceCreamLogistics.Application.Manufacturing
{
    public class MixingBatchService : IMixingBatchService
    {
        private readonly IMixingBatchesRepository _mixingBatchesRepository;
        private readonly IOrderPartRepository _orderPartRepository;

        public MixingBatchService(IMixingBatchesRepository mixingBatchesRepository, IOrderPartRepository orderPartRepository)
        {
            _mixingBatchesRepository = mixingBatchesRepository;
            _orderPartRepository = orderPartRepository;
        }

        public async Task<MixingBatchCreate> Create(MixingBatchCreate mixingBatch)
        {
            await _mixingBatchesRepository.Create(mixingBatch);
            await _orderPartRepository.DepleteIncompleteItems(mixingBatch.Members);
            return mixingBatch;
        }
    }
}