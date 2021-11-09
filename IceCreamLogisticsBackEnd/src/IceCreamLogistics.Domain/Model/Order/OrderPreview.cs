using System;

namespace IceCreamLogistics.Domain
{
    public class OrderPreview
    {
        public int Id { get; set; }
        public ClientShallow Client { get; set; }
        public DateTime OrderCreated { get; set; }
        public DateTime RequestedDate { get; set; }
        public int RecipesOrdered { get; set; }
        public int RecipesSelectedForMixing { get; set; }
        public int RecipesMixed { get; set; }
        public OrderState OrderState { get; set; }
    }
}