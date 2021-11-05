using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public class ClientService : IClientService
    {
        private readonly IClientRepository _clientRepository;

        public ClientService(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }
        
        public Task<IEnumerable<Client>> Search(string text, LazyLoadingParams loadingParams)
        {
            return _clientRepository.GetClientsBySearch(text, loadingParams);
        }

        public Task<Client> AddClient(Domain.Client client)
        {
            return _clientRepository.Create(client);
        }
        public Task<Client> UpdateClient(Client client)
        {
            return _clientRepository.Update(client);
        }
    }
}