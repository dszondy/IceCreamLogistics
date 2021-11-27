using System.ComponentModel.DataAnnotations;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Infrastructure.DAL.DBOs
{
    internal class OrderItemDbo
    {
        [Key]
        public int Id { get; set; }
        
        public int OrderId { get; set; }
        public int RecipeId { get; set; }
        public RecipeDbo Recipe { get; set; }
        public decimal Amount { get; set; }
        public decimal SelectedMixingAmount { get; set; }
        public decimal CancelledMixingAmount { get; set; }

        public decimal MixedAmount { get; set; }


    }
}