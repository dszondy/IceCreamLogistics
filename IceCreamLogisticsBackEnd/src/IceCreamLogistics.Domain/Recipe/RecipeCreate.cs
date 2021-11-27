using System.Collections.Generic;

namespace IceCreamLogistics.Domain
{
    public class RecipeCreate
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool CanBeOrdered { get; set; }
        public string DescriptionForLabels { get; set; }
        public decimal PricePerUnit { get; set; }
        public IEnumerable<RecipeCreateIngredient> Ingredients { get; set; }
    }

    public class RecipeCreateIngredient
    {
        public int IngredientId{ get; set; }
        public decimal Amount { get; set; }
    }
}