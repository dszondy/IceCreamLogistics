using System;
using System.Collections;
using System.Collections.Generic;

namespace IceCreamLogistics.Presentation.DTOs
{
    public class DeliveryEditDto
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public DateTime DeliveryDate { get; set; }
        public IEnumerable<int> OrderIds { get; set; }
        public bool Completed { get; set; }
    }
}