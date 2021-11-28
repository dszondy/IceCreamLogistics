using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public interface IClientRepository
    {
        Task<IEnumerable<Client>> GetClientsBySearch(string text, LazyLoadingParams loadingParams);
        Task<Domain.Client> Create(Client client);
        Task<Client> Update(Client client);
    }
}