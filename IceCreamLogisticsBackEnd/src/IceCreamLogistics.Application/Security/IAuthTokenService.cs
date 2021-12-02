using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application.Security
{
    public interface IAuthTokenService
    {
       Task<string> GenerateToken(User user);
    }
}