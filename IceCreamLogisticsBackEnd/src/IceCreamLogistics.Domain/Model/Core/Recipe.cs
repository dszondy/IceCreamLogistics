using System.Security.Cryptography;

namespace IceCreamLogistics.Domain
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool CanBeOrdered { get; set; }

    }
}