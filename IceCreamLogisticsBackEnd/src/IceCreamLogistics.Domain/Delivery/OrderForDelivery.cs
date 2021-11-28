using System;
using System.Collections.Generic;

namespace IceCreamLogistics.Domain
{
    public class OrderForDelivery
    {
        public int Id { get; set; }
        public IEnumerable<OrderItemForDelivery> Items { get; set; }
        public Client Client { get; set; }
        public DateTime RequestedDate { get; set; }
        public OrderState OrderState { get; set; }
    }
    
    public class OrderItemForDelivery
    {
        public Recipe Recipe { get; set; }
        public decimal Amount { get; set; }
        public decimal PendingAmount { get; set; }
        public decimal MixedAmount { get; set; }
        public decimal CancelledAmount { get; set; }
    }
}