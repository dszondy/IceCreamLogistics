using System.Threading.Tasks;
using IceCreamLogistics.Domain.Security;

namespace IceCreamLogistics.Application.Security
{
    public interface IAuthRepository
    {
        Task UpsertAuthInfo(BasicAuthInfo authInfo);
        
        Task<BasicAuthInfo> GetAuthInfo(int userId);
    }
}