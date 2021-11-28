using System;
using System.Collections.Generic;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Presentation.DTOs
{
    public class OrderForDeliveryDto
    {
        public int Id { get; set; }
        public IEnumerable<OrderItemForDeliveryDto> Items { get; set; }
        public Client Client { get; set; }
        public DateTime RequestedDate { get; set; }
        public OrderState OrderState { get; set; }
    }
    
    public class OrderItemForDeliveryDto
    {
        public Recipe Recipe { get; set; }
        public decimal Amount { get; set; }
        public decimal PendingAmount { get; set; }
        public decimal MixedAmount { get; set; }
        public decimal CancelledAmount { get; set; }
    }
}