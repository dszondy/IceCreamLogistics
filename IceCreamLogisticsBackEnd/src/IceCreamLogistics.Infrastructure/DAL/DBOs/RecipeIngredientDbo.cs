using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Infrastructure.DAL.DBOs
{
    internal class RecipeIngredientDbo
    {
        public int Id { get; set; }
        
        public int IngredientId { get; set; }
        public IngredientDbo Ingredient { get; set; }

        public int RecipeId { get; set; }
        public decimal Amount { get; set; }
    }
}