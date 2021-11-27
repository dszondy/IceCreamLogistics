namespace IceCreamLogistics.Domain
{
    public class Ingredient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal AmountOnHand { get; set; }
        public string MeasurementUnit { get; set; }
        public decimal QuantityPerPackage { get; set; }
    }
}