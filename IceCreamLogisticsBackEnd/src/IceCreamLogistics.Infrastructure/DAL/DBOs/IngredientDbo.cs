using System.Collections;

namespace IceCreamLogistics.Infrastructure.DAL.DBOs
{
    public class IngredientDbo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal AmountOnHand { get; set; }
        public string MeasurementUnit { get; set; }
        public decimal QuantityPerPackage { get; set; }
        public decimal WarningThreshold { get; set; }
        public bool IsDeleted { get; set; }
    }
}