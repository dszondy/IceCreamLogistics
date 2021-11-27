using System;
using System.Collections;
using System.Collections.Generic;

namespace IceCreamLogistics.Domain
{
    public class MixingBatchCreate
    {
        public string Name { get; set; }
        public DateTime Created { get; set; }
        public IEnumerable<MixingBatchCreateMember> Members { get; set; }
    }
    

    public class MixingBatchCreateMember
    {
        public int OrderId { get; set; }
        public IEnumerable<MixingBatchCreateItem> Items { get; set; }
    }

    public class MixingBatchCreateItem
    {
        public int RecipeId { get; set; }
        public decimal Amount { get; set; }
    }
}