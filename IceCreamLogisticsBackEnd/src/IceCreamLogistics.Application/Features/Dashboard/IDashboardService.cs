using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public interface IDashboardService
    {
        Task<IEnumerable<DashboardValue>> GetPopularRecipesLast30Days();
        Task<IEnumerable<DashboardValue>> GetOrdersByWeekLast10();
        Task<IEnumerable<DashboardValue>> GetOrdersByClientLast30Days();
        Task<IEnumerable<DashboardValue>> GetOrdersCancelledLast30();
    }
}