namespace IceCreamLogistics.Domain
{
    public enum OrderState
    {
        Cancelled,
        Pending,
        Active,
        ReadyForDelivery,
        Delivered,
    }
}