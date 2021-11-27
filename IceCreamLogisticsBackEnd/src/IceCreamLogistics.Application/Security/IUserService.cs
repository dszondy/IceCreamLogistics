using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Domain.Security;
using Microsoft.AspNetCore.Mvc;

namespace IceCreamLogistics.Application.Security
{
    public interface IUserService
    {
        Task<User> Create(UserCreate user);
        Task<User> Update(int id, UserCreate user);
        
        Task<User> Get(int id);

        Task<IEnumerable<UserShallow>> Search(string search, LazyLoadingParams lazyLoadingParams);
        
    }
}