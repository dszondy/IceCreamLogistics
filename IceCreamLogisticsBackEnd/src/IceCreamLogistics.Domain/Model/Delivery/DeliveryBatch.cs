namespace IceCreamLogistics.Domain
{
    public class DeliveryBatch
    {
        public Order OriginalOrder { get; set; }
        public Order DeliveredOrder { get; set; }
    }
}