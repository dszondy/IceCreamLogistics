using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application.Mixing
{
    public interface IMixingRepository
    {
        Task<int> Create(MixingBatchCreate batch);
        Task<MixingBatchDetails> Get(int id);
        Task<IEnumerable<MixingBatchShallow>> List(MixingSearchParams mixingSearchParams, LazyLoadingParams loadingParams);
        Task AdministerAbsolute(int batchId, IEnumerable<MixingBatchCreateMember> members);
    }
}