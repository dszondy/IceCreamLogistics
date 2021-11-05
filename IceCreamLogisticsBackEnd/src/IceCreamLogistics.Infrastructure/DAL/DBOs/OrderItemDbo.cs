using System.ComponentModel.DataAnnotations;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Infrastructure.DAL.DBOs
{
    internal class OrderItemDbo
    {
        [Key]
        public int Id { get; set; }
        
        public int? OrderId { get; set; }
        public int? MixingBatchMemberId { get; set; }
        public int? IncompleteOrderId { get; set; }

        public int RecipeId { get; set; }
        public RecipeDbo Recipe { get; set; }
        public decimal Amount { get; set; }
    }
}