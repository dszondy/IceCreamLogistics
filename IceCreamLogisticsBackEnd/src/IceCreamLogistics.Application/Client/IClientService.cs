using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public interface IClientService
    {
        Task<IEnumerable<Client>> Search(string text, LazyLoadingParams loadingParams);
        Task<Client> AddClient(Domain.Client client);
        Task<Client> UpdateClient(Client client);
    }
}