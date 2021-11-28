using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Infrastructure.DAL.DBOs
{
    internal class OrderDbo
    {
        [Key]
        public int Id { get; set; }
        public ICollection<OrderItemDbo> Items { get; set; }
        public int ClientId { get; set; }
        public ClientDbo Client { get; set; }
        public DateTime OrderCreated { get; set; }
        public DateTime RequestedDate { get; set; }
        public OrderState OrderState { get; set; }
        public int? DeliveryId { get; set; }
    }
}