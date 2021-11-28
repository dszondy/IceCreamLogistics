using System.Collections.Generic;

namespace IceCreamLogistics.Domain
{
    public class RecipeDetails
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool CanBeOrdered { get; set; }
        public string DescriptionForLabels { get; set; }
        public decimal PricePerUnit { get; set; }
        
        public IEnumerable<RecipeIngredient> Ingredients { get; set; }
    }

    public class RecipeIngredient
    {
        public int IngredientId { get; set; }
        public string IngredientName { get; set; }
        public decimal Amount { get; set; }
        public string MeasurementUnit { get; set; }
    }
}