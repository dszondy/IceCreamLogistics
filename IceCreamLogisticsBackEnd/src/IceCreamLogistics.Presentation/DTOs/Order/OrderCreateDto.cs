using System;
using System.Collections.Generic;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Presentation.DTOs
{
    public class OrderCreateDto
    {
        public IEnumerable<OrderCreateItemDto> Items { get; set; }
        public int ClientId { get; set; }
        public DateTime RequestedDate { get; set; }
    }

    public class OrderCreateItemDto
    {
        public int RecipeId { get; set; }
        public int Amount { get; set; }
    }
}