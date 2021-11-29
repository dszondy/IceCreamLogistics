using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Presentation.DTOs
{
    public class InventoryStatusDto
    { 
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal AmountOnHand { get; set; }
        public string MeasurementUnit { get; set; }
        public decimal QuantityPerPackage { get; set; }
        public decimal WarningThreshold { get; set; }
        public decimal AmountRequired { get; set; }
    }
}