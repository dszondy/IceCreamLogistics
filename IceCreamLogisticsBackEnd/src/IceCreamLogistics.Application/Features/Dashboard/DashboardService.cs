using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public class DashboardService : IDashboardService
    {
        private readonly IDashboardValuesRepository _dashboardValuesRepository;

        public DashboardService(IDashboardValuesRepository dashboardValuesRepository)
        {
            _dashboardValuesRepository = dashboardValuesRepository;
        }

        public Task<IEnumerable<DashboardValue>> GetPopularRecipesLast30Days()
        {
            return _dashboardValuesRepository.GetPopularRecipesLast30Days();
        }
        public Task<IEnumerable<DashboardValue>> GetOrdersByWeekLast10()
        {
            return _dashboardValuesRepository.GetOrdersByWeekLast10();
        }
        public Task<IEnumerable<DashboardValue>> GetOrdersByClientLast30Days()
        {
            return _dashboardValuesRepository.GetOrdersByClientLast30Days();
        }
        public Task<IEnumerable<DashboardValue>> GetOrdersCancelledLast30()
        {
            return _dashboardValuesRepository.GetOrdersCancelledLast30();
        }
    }
}