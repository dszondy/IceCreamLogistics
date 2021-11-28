namespace IceCreamLogistics.Presentation.DTOs
{
    public class IngredientDto  
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal AmountOnHand { get; set; }
        public string MeasurementUnit { get; set; }
    }
}