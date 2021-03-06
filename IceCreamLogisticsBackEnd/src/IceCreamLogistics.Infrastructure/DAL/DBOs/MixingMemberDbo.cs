using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Infrastructure.DAL.DBOs
{
    internal class MixingMemberDbo
    {
        [Key]
        public int Id { get; set; }
        
        public int OrderId { get; set; }
        public OrderDbo Order { get; set; }

        public int MixingBatchId { get; set; }
        public ICollection<MixingItemDbo> Items { get; set; }
    }
}