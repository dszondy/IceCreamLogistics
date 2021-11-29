using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Application.Model;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Presentation.DTOs;

namespace IceCreamLogistics.Application.Delivery
{
    class DeliveryService : IDeliveryService
    {
        private readonly IDeliveryRepository _deliveryRepository;

        public DeliveryService(IDeliveryRepository deliveryRepository)
        {
            _deliveryRepository = deliveryRepository;
        }

        public Task<DeliveryDetails> Get(int id)
        {
            return _deliveryRepository.Get(id);
        }

        public Task<DeliveryDetails> Create(DeliveryEdit delivery)
        {
            return _deliveryRepository.Create(delivery);
        }

        public Task<DeliveryDetails> Update(int id, DeliveryEdit delivery)
        {
            return _deliveryRepository.Update(id, delivery);
        }

        public Task<IEnumerable<DeliveryShallow>> List(DeliverySearchParams searchParams, LazyLoadingParams lazyLoadingParams)
        {
            return _deliveryRepository.List(searchParams, lazyLoadingParams);
        }
    }
}