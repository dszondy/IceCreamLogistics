using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public interface IDashboardValuesRepository
    {
        Task<IEnumerable<DashboardValue>> GetPopularRecipesLast30Days();

    }
}