using System;
using System.Collections.Generic;

namespace IceCreamLogistics.Domain
{
    public class Order
    {
        public int Id { get; set; }
        public IEnumerable<OrderItem> Items { get; set; }
        public Client Client { get; set; }
        public DateTime OrderCreated { get; set; }
        public DateTime RequestedDate { get; set; }
        public OrderState OrderState { get; set; }
    }
}