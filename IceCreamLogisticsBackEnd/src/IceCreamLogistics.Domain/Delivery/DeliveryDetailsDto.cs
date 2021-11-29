using System;
using System.Collections.Generic;

namespace IceCreamLogistics.Domain
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