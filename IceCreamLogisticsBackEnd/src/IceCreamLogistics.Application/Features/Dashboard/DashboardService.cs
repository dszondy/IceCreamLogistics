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
        public Task<IEnumerable<DashboardValue>> GetOrdersByWeekLat10()
        {
            return _dashboardValuesRepository.GetPopularRecipesLast30Days();
        }
        public Task<IEnumerable<DashboardValue>> GetOrdersByClient()
        {
            return _dashboardValuesRepository.GetPopularRecipesLast30Days();
        }
    }
}