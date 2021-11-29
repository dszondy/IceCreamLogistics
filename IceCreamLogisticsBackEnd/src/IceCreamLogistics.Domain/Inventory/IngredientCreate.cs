using System.Collections;

namespace IceCreamLogistics.Domain
{
    public class IngredientCreate
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string MeasurementUnit { get; set; }
        public decimal QuantityPerPackage { get; set; }
        public decimal WarningThreshold { get; set; }
    }
}