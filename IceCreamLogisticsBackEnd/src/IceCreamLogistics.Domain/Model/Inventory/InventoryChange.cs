using System;

namespace IceCreamLogistics.Domain
{
    public class InventoryChange
    {
        public int Id { get; set; }
        public int IngredientId { get; set; }
        public decimal AmountLeft { get; set; }
        public decimal Amount { get; set; }
        public DateTime CreatedDate { get; set; }
        public InventoryChangeType Type { get; set; }
        public string Description { get; set; }
        public DateTime? ExpiresAt { get; set; }
    }
    /// <summary>
    /// Reason for the change event
    /// </summary>
    public enum InventoryChangeType
    {
        // Been automatically depleted with MixingBatch
        Usage,
        // Expiration date reached for an earlier element
        Expiration,
        // Stock changed by user, relative
        StockChange,
        // Stock changed by user, absolute
        StockCorrection,
    }
}