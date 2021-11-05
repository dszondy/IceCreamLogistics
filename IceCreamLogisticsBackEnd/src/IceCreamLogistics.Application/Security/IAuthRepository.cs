using System.Threading.Tasks;
using IceCreamLogistics.Domain.Security;

namespace IceCreamLogistics.Application.Security
{
    public interface IAuthRepository
    {
        Task CreateAuthInfo(BasicAuthInfo authInfo);
        
        Task UpdateAuthInfo(BasicAuthInfo authInfo);
        
        Task<BasicAuthInfo> GetAuthInfo(int userId);
    }
}