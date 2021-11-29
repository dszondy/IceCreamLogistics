using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Application.Model;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public interface IInventoryStatusRepository
    {
        Task<InventoryWarning> GetInventoryWarning();
        Task<IEnumerable<InventoryStatus>> SearchInventory(InventorySearchParams searchParams, LazyLoadingParams lazyLoadingParams);
        
        Task<InventoryStatus> GetInventoryStatus(int id);
    }
}