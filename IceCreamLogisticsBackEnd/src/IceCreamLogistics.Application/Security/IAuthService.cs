using System.Threading.Tasks;

namespace IceCreamLogistics.Application.Security
{
    public interface IAuthService
    {
        Task<string> AuthenticateUser(string email, string password);
    }
}