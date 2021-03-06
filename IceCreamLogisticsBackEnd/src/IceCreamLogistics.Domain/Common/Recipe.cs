using System.Security.Cryptography;

namespace IceCreamLogistics.Domain
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string DescriptionForLabels { get; set; }
        public bool CanBeOrdered { get; set; }
        public decimal PricePerUnit { get; set; }
    }
}