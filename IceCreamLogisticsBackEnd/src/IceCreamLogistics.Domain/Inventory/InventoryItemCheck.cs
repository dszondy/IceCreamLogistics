namespace IceCreamLogistics.Domain
{
    public class InventoryItemCheck
    {
        public Ingredient Ingredient { get; set; }
        public decimal AmountOnHand { get; set; }
        public decimal AmountNeededForPending { get; set; }
        public decimal AmountReservedForActiveBatches { get; set; }
    }
}