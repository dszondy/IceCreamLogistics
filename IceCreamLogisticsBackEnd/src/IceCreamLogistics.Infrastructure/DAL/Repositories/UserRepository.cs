using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Application;
using IceCreamLogistics.Application.Security;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Domain.Security;
using IceCreamLogistics.Infrastructure.DAL.DBOs;
using Mapster;
using Microsoft.EntityFrameworkCore;

namespace IceCreamLogistics.Infrastructure.DAL.Repositories
{
    internal class UserRepository: IUserRepository
    {
        private readonly IceCreamLogisticsDbContext _dbContext;

        public UserRepository(IceCreamLogisticsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<User> GetUserById(int id)
        {
            var user = await _dbContext.Users
                .Include(x => x.Roles)
                .Include(x => x.Client)
                .FirstOrDefaultAsync(x => x.Id == id);
            return DboMappingProvider.Mapper
                .From(user)
                .AdaptToType<User>();
        }

        public async Task<User> GetUserByName(string name)
        {
            var user = await _dbContext.Users
                .Include(x => x.Roles)
                .Include(x => x.Client)
                .FirstOrDefaultAsync(x => x.Name == name);
            return  DboMappingProvider.Mapper
                .From(user)
                .AdaptToType<User>();
        }

        public async Task<User> Create(UserCreate user)
        {

            var dbo = user.MapTo<UserDbo>();
            await _dbContext.AddAsync(dbo);
            await _dbContext.SaveChangesAsync();
            return await GetUserById(dbo.Id);
        }

        public async Task<User> Update(int id, UserCreate user)
        {
            var dbo = await _dbContext.Users
                .Include(x =>x.Roles)
                .FirstOrDefaultAsync(x => x.Id == id);
            dbo.Email = user.Email;
            dbo.Roles.Clear();
            if (user.Roles is not null)
            {
                user.Roles
                    .Select(x => new RoleDbo()
                        {
                            UserId = id,
                            Role = x
                        })
                    .ToList()
                    .ForEach(x => dbo.Roles.Add(x));
            }
            dbo.ClientId = user.ClientId > 0 ? user.ClientId: null;

            await _dbContext.SaveChangesAsync();
            return await GetUserById(dbo.Id);       
        }

        public async Task<IEnumerable<UserShallow>> Search(string search, LazyLoadingParams lazyLoadingParams)
        {
            return _dbContext.Users
                .Where(x => x.Name.StartsWith(search ?? ""))
                .ApplyLazyLoading(lazyLoadingParams)
                .Select(x => x.MapTo<UserShallow>());
        }
    }
}