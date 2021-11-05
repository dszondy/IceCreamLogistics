using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Application.Security;
using IceCreamLogistics.Domain.Security;
using IceCreamLogistics.Infrastructure.DAL.DBOs;
using Mapster;
using Microsoft.EntityFrameworkCore;

namespace IceCreamLogistics.Infrastructure.DAL.Repositories
{
    internal class AuthRepository: IAuthRepository
    {
        private IceCreamLogisticsDbContext DbContext { get; }

        public AuthRepository(IceCreamLogisticsDbContext dbContext)
        {
            DbContext = dbContext;
        }

        public async Task CreateAuthInfo(BasicAuthInfo authInfo)
        {
            await DbContext.AddAsync(authInfo.Adapt<BasicAuthInfoDbo>());
            await DbContext.SaveChangesAsync();
        }

        public async Task UpdateAuthInfo(BasicAuthInfo authInfo)
        {
            var authInfoDbo = await GetAuthInfosByUserIdQuery( authInfo.UserId).FirstAsync();
            authInfoDbo.PasswordHash = authInfo.PasswordHash;
            authInfo.Salt = authInfo.Salt;
            await DbContext.SaveChangesAsync();        
        }
        
        public async Task<BasicAuthInfo> GetAuthInfo(int userId)
        {
            var authInfo = await GetAuthInfosByUserIdQuery(userId).FirstOrDefaultAsync();
            return  DboMappingProvider.Mapper
                .From(authInfo)
                .AdaptToType<BasicAuthInfo>();
        }
        
        private IQueryable<BasicAuthInfoDbo> GetAuthInfosByUserIdQuery(int userId)
        {
            return DbContext.AuthInfos
                .Where(x => x.UserId == userId);
        }
    }
}