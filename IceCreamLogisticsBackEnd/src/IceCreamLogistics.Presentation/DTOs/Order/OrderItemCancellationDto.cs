namespace IceCreamLogistics.Presentation.Controllers
{
    public class OrderItemCancellationDto
    {
        public int OrderId { get; set; }
        public int RecipeId { get; set; }
        public int Amount { get; set; }
    }
}