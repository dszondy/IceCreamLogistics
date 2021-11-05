using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application.Security
{
    public interface IUserTokenService
    {
       Task<string> GenerateToken(User user);
    }
}