using Newtonsoft.Json;

namespace IceCreamLogistics.Domain
{
    public class InventoryStatus : Ingredient
    { 
        public decimal AmountRequired { get; set; }
    }
}