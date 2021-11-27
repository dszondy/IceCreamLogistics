using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace IceCreamLogistics.Domain
{
    public class MixingInventoryCheck
    {
        public Ingredient Ingredient { get; set; }
        public decimal AmountRequired { get; set; }
    }
}