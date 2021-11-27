using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Domain.Security;

namespace IceCreamLogistics.Application.Security
{
    public interface IUserRepository
    {
        Task<User> GetUserById(int id);
        Task<User> GetUserByName(string name);
        Task<User> Create(UserCreate user);
        Task<User> Update(int id, UserCreate user);
        Task<IEnumerable<UserShallow>> Search(string search, LazyLoadingParams lazyLoadingParams);
    }
}