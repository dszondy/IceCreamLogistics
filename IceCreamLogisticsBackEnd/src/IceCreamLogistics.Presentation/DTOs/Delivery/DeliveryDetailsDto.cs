using System;
using System.Collections;
using System.Collections.Generic;

namespace IceCreamLogistics.Presentation.DTOs
{
    public class DeliveryDetailsDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DeliveryDate { get; set; }
        public IEnumerable<OrderDetails> Orders { get; set; }
        public bool Completed { get; set; }
    }
}