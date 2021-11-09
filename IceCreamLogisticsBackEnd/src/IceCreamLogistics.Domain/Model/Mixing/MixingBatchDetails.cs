using System;
using System.Collections;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace IceCreamLogistics.Domain
{
    public class MixingBatchDetails
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Created { get; set; }
        public IEnumerable<MixingBatchMember> Members { get; set; }
    }
    
    public class MixingBatchMember
    {
        public Order Order { get; set; }
        public IEnumerable<MixingBatchItem> Items { get; set; }
    }

    public class MixingBatchItem
    {
        public Recipe Recipe { get; set; }
        public decimal Amount { get; set; }
        public decimal CompletedAmount { get; set; }
    }
}   