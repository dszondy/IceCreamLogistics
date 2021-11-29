using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
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
        public decimal MixedAmount { get; set; }

        public ICollection<OrderItemCancellationDbo> Cancellations { get; set; }
        [NotMapped]
        public decimal CancelledAmount => Cancellations.Sum(c => c.Amount);

        [NotMapped]
        public decimal PendingAmount => Amount - CancelledAmount - SelectedMixingAmount;
        
        [NotMapped]
        public decimal InProgressAmount => SelectedMixingAmount - MixedAmount;
    }
}