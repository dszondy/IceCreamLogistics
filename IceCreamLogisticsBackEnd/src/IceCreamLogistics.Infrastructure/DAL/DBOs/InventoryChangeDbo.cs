using System;
using System.ComponentModel.DataAnnotations;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Infrastructure.DAL.DBOs
{
    public class InventoryChangeDbo
    {
        [Key]
        public int Id { get; set; }
        public int IngredientId { get; set; }
        public decimal AmountLeft { get; set; }
        public decimal Amount { get; set; }
        public DateTime CreatedDate { get; set; }
        public InventoryChangeType Type { get; set; }
        public string Description { get; set; }
        public DateTime? ExpiresAt { get; set; }
    }
}