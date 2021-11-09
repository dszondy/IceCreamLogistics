using System.Collections.Generic;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Presentation.DTOs
{
    public class OrderPartDto
    {
        public int Id { get; set; }
        public Order Order { get; set; }
        public IEnumerable<OrderItem> IncompleteItems { get; set; }
    }
}