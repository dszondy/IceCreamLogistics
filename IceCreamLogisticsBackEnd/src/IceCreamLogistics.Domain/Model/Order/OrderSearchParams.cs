using System;

namespace IceCreamLogistics.Domain
{
    public class OrderSearchParams
    {
        public DateTime? From { get; set; }
        public DateTime? To { get; set; }
        public string? ClientName { get; set; }
        public string? RecipeName { get; set; }
    }
}