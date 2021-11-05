using System.Collections;
using System.Collections.Generic;

namespace IceCreamLogistics.Domain
{
    internal class OrderWithPendingItems: Order
    {
        public IEnumerable<OrderItem> PendingItems { get; set; }
        
    }
}