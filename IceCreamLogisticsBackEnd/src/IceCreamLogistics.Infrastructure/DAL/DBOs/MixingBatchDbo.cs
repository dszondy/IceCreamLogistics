using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace IceCreamLogistics.Infrastructure.DAL.DBOs
{
    internal class MixingBatchDbo
    {
        [Key]
        public int Id { get; set; }
        
        public ICollection<MixingBatchMemberDbo> Members { get; set; }
    }
}