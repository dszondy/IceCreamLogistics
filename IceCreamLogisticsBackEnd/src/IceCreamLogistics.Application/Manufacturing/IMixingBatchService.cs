using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application.Manufacturing
{
    public interface IMixingBatchService
    {
        Task<MixingBatchCreate> Create(MixingBatchCreate mixingBatch);
    }
}