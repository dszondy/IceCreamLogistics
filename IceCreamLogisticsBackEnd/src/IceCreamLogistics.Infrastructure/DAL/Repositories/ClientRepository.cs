using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Application;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Infrastructure.DAL.DBOs;
using Mapster;
using Microsoft.EntityFrameworkCore;

namespace IceCreamLogistics.Infrastructure.DAL.Repositories
{
    internal class ClientRepository : IClientRepository
    {
        public ClientRepository(IceCreamLogisticsDbContext dbContext)
        {
            DbContext = dbContext;
        }

        private IceCreamLogisticsDbContext DbContext { get; }

        public async Task<IEnumerable<Client>>  GetClientsBySearch(string text, LazyLoadingParams loadingParams)
        {
            return DbContext.Clients
                .Include(x => x.Address)
                .Where(x => x.Name.StartsWith(text))
                    .OrderBy(x => x.Name)
                .ApplyLazyLoading(loadingParams)
                .ToArray()
                .Select(x => DboMappingProvider.Mapper
                    .From(x)
                    .AdaptToType<Client>());
        }

        public async Task<Client> Create(Client client)
        {
            var clientDbo = DboMappingProvider.Mapper
                .From(client)
                .AdaptToType<ClientDbo>();
            
            await DbContext.Clients.AddAsync(clientDbo);
            await DbContext.Addresses.AddAsync(clientDbo.Address);
            await DbContext.SaveChangesAsync();
            
            return DboMappingProvider.Mapper
                .From(clientDbo)
                .AdaptToType<Client>();
        }

        public async Task<Client> Update(Client client)
        {
            
            var clientDbo = DboMappingProvider.Mapper
                .From(client)
                .AdaptTo<ClientDbo>(await DbContext.Clients
                    .Include(x => x.Address)
                    .FirstAsync(x => x.Id == client.Id));
            
            await DbContext.SaveChangesAsync();
            
            return DboMappingProvider.Mapper
                .From(clientDbo)
                .AdaptToType<Client>();        
        }
    }
}