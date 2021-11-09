using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public interface IOrderProgressRepository
    {
        Task<IEnumerable<OrderPart>> GetIncompleteParts(OrderSearchParams searchParams, LazyLoadingParams loadingParams);
        Task RegisterSelectedMixingAmounts(IEnumerable<MixingBatchCreateMember> members);
        Task RegisterCompletedMixingAmounts(IEnumerable<MixingBatchCreateMember> members);
    }
}