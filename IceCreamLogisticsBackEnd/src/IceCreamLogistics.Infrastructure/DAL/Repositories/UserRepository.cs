using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Application.Security;
using IceCreamLogistics.Domain;
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
    }
}