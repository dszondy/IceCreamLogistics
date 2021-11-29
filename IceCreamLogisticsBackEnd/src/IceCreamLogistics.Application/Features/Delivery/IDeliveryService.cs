using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Application.Model;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Presentation.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace IceCreamLogistics.Application.Delivery
{
    public interface IDeliveryService
    {
        Task<DeliveryDetails> Get(int id);
        Task<DeliveryDetails> Create(DeliveryEdit delivery);
        Task<DeliveryDetails> Update(int id, DeliveryEdit delivery);

        Task<IEnumerable<DeliveryShallow>> List(DeliverySearchParams searchParams, LazyLoadingParams lazyLoadingParams);
    }
}