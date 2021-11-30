using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application.Security
{
    public interface IAuthService
    {
        Task<string> AuthenticateUser(string name, string password);
        Task ChangePassword(int useId, string password);
        Task<User> GetCurrentUser();
    }
}