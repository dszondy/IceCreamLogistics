namespace IceCreamLogistics.Presentation.DTOs
{
    public class IngredientCreateDto {

        public int Id { get; set; }
        public string Name { get; set; }
        public string MeasurementUnit { get; set; }
        public decimal QuantityPerPackage { get; set; }
        public decimal WarningThreshold { get; set; }
    }
}