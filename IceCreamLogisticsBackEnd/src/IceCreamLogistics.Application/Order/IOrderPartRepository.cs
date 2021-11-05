using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public interface IOrderPartRepository
    {
        Task<IEnumerable<OrderPart>> GetIncompleteParts(OrderSearchParams searchParams, LazyLoadingParams loadingParams);
        Task DepleteIncompleteItems(IEnumerable<MixingBatchCreateMember> members);
    }
}