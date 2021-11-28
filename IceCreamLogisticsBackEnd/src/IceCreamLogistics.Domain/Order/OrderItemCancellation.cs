namespace IceCreamLogistics.Application
{
    public class OrderItemCancellation
    {
        public int OrderId { get; set; }
        public int RecipeId { get; set; }
        public int Amount { get; set; }
    }
}