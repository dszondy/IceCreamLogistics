namespace IceCreamLogistics.Domain
{
    public class IngredientAmount
    {
        public RecipeIngredient Ingredient { get; set; }
        public decimal Amount { get; set; }
    }
    public class IngredientAmountEdit
    {
        public int IngredientId { get; set; }
        public decimal Amount { get; set; }
    }
   
}