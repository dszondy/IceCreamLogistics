using System;

namespace IceCreamLogistics.Domain
{
    public class MixingBatchShallow
    {

            public int Id { get; set; }
            public string Name { get; set; }
            public DateTime Created { get; set; }
            public int OrderCount { get; set; }
            public int RecipeCount { get; set; }
            public decimal TotalAmount { get; set; }
            public decimal TotalCompletedAmount { get; set; }
    }
}