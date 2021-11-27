using System.Threading.Tasks;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Domain.Security;

namespace IceCreamLogistics.Application.Security
{
    public interface ICurrentUserService
    {
        Task<int> GetUserId();
        
        Task<Role[]> GetRoles();
        Task<bool> HasRole(Role role);
        
        Task<int> GetClientId();
    }
}