using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application.Manufacturing
{
    public interface IMixingService
    {
        Task<int> Create(MixingBatchCreate mixingBatch);
        Task<IEnumerable<MixingBatchShallow>> List(MixingSearchParams mixingSearchParams, LazyLoadingParams loadingParams);
        Task<MixingBatchDetails> Get(int id);

        Task<MixingBatchDetails> AdministerAbsolute(int batchId, IEnumerable<MixingBatchCreateMember> members);
    }
}