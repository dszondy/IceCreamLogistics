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
        private IceCreamLogisticsDbContext DbContext { get; }

        public UserRepository(IceCreamLogisticsDbContext dbContext)
        {
            DbContext = dbContext;
        }

        public async Task<User> GetUserById(int id)
        {
            var user = await DbContext.Users
                .Include(x => x.Roles)
                .FirstOrDefaultAsync(x => x.Id == id);
            return DboMappingProvider.Mapper
                .From(user)
                .AdaptToType<User>();
        }

        public async Task<User> GetUserByEmail(string email)
        {
            var user = await DbContext.Users
                .Include(x => x.Roles)
                .FirstOrDefaultAsync(x => x.Email == email);
            return  DboMappingProvider.Mapper
                .From(user)
                .AdaptToType<User>();
        }

        public async Task<User> Create(UserCreate user)
        {

            var dbo = user.MapTo<UserDbo>();
            await DbContext.AddAsync(dbo);
            await DbContext.SaveChangesAsync();
            return await GetUserById(dbo.Id);
        }

        public async Task<User> Update(int id, UserCreate user)
        {
            var dbo = await DbContext.Users.Include(x =>x.Roles).FirstOrDefaultAsync(x => x.Id == id);
            dbo.Email = user.Email;
            dbo.Roles = user.Roles
                .Select(x => new RoleDbo()
                {
                    UserId = id,
                    Role = x
                }).ToArray();
            await DbContext.SaveChangesAsync();
            return await GetUserById(dbo.Id);        }

        public async Task<IEnumerable<UserShallow>> Search(string search, LazyLoadingParams lazyLoadingParams)
        {
            return DbContext.Users
                .Where(x => x.Name.StartsWith(search ?? ""))
                .ApplyLazyLoading(lazyLoadingParams)
                .Select(x => x.MapTo<UserShallow>());
        }
    }
}