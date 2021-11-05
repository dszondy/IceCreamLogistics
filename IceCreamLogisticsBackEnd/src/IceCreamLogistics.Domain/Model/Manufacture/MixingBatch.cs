using System.Collections.Generic;

namespace IceCreamLogistics.Domain
{
    public class MixingBatch
    {
        public IEnumerable<OrderItem> Content { get; set; }
        public IEnumerable<Order> OrdersSnapshot { get; set; }
    }
}   