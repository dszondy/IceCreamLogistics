using System.Collections.Generic;

namespace IceCreamLogistics.Presentation.DTOs
{
    public class RecipeDetailsDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool CanBeOrdered { get; set; }
        public IEnumerable <RecipeIngredientDto> Ingredients { get; set; }
    }
    public class RecipeIngredientDto
    {
        public int IngredientId{ get; set; }
        public string IngredientName { get; set; }
        public string MeasurementUnit { get; set; }
        public decimal Amount { get; set; }
}
}