using System.Collections;
using System.Collections.Generic;

namespace IceCreamLogistics.Presentation.DTOs
{
    public class RecipeDto 
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool CanBeOrdered { get; set; }
        public decimal PricePerUnit { get; set; }
        public string DescriptionForLabels { get; set; }

    }
}