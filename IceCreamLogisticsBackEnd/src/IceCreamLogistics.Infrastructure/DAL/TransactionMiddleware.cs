using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore.Storage;

namespace IceCreamLogistics.Infrastructure.DAL
{
    internal class DbTransactionMiddleware
    {
        private readonly RequestDelegate _next;

        public DbTransactionMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext httpContext, IceCreamLogisticsDbContext dbContext)
        {
            IDbContextTransaction transaction = null;
            try
            {
                transaction = await dbContext.Database.BeginTransactionAsync();
    
                await _next(httpContext);

                await transaction.CommitAsync();
            }
            catch (Exception)
            {
                if (transaction != null)
                    await transaction.RollbackAsync();

                throw;
            }
            finally
            {
                if (transaction != null)
                    await transaction.DisposeAsync();
            }
        }
    }
}