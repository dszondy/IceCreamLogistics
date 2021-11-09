using System.ComponentModel.DataAnnotations;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Infrastructure.DAL.DBOs
{
    internal class MixingItemDbo
    {
        [Key]
        public int Id { get; set; }
        
        public int MixingMemberId { get; set; }
        public int RecipeId { get; set; }
        
        public decimal Amount { get; set; }
        public decimal CompletedAmount { get; set; }
        public RecipeDbo Recipe { get; set; }
    }
}