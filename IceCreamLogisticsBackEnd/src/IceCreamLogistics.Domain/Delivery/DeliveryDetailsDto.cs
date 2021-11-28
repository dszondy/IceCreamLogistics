using System;
using System.Collections;
using System.Collections.Generic;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Domain.Delivery;

namespace IceCreamLogistics.Presentation.DTOs
{
    public class DeliveryDetails
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DeliveryDate { get; set; }
        public IEnumerable<OrderForDelivery> Orders { get; set; }
        public bool Completed { get; set; }
    }
}