using System;

namespace IceCreamLogistics.Presentation.DTOs
{
    public class DeliveryShallowDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DeliveryDate { get; set; }
        public bool Completed { get; set; }
        public int ClientCount { get; set; }
        public int OrderCount { get; set; }
        public int RecipeCount { get; set; }
        public int TotalAmount { get; set; }
    }
}