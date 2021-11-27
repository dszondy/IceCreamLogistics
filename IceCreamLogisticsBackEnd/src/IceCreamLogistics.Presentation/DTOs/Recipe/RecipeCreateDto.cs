using System.Collections;
using System.Collections.Generic;

namespace IceCreamLogistics.Presentation.DTOs
{
    public class RecipeCreateDto 
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool CanBeOrdered { get; set; }
        public string DescriptionForLabels { get; set; }
        public decimal PricePerUnit { get; set; }
        public IEnumerable<RecipeCreateIngredientDto> Ingredients { get; set; }
    }

    public class RecipeCreateIngredientDto
    {
        public int IngredientId{ get; set; }
        public decimal Amount { get; set; }
    }
}