using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Domain.Security;

namespace IceCreamLogistics.Application.Security
{
    class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public Task<User> Create(UserCreate user)
        {
            return _userRepository.Create(user);
        }

        public Task<User> Update(int id, UserCreate user)
        {
            return _userRepository.Update(id, user);
        }

        public Task<User> Get(int id)
        {
            return _userRepository.GetUserById(id);
        }

        public Task<IEnumerable<UserShallow>> Search(string search, LazyLoadingParams lazyLoadingParams)
        {
            return _userRepository.Search(search, lazyLoadingParams);
        }
    }
}