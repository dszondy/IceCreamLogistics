using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application.Mixing
{
    public interface IMixingInventoryCheckService
    {
        Task<IEnumerable<MixingInventoryCheck>> CheckInventory(MixingBatchCreate batch);
    }
}