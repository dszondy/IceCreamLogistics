using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Presentation.DTOs
{
    public class MixingInventoryCheckDto
    {
            public IngredientDto Ingredient { get; set; }
            public decimal AmountRequired { get; set; }
    }
}