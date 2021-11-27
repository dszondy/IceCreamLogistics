using System;
using System.Collections;
using System.Collections.Generic;

namespace IceCreamLogistics.Domain
{
    public class OrderPart
    {
        public int Id { get; set; }
        public Order Order { get; set; }
        public IEnumerable<OrderItem> IncompleteItems { get; set; }
    }
}