using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application.Security
{
    public interface IUserRepository
    {
        Task<User> GetUserById(int id);
        Task<User> GetUserByEmail(string email);
    }
}