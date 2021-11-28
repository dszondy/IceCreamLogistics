using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace IceCreamLogistics.Infrastructure.DAL.DBOs
{
    internal class DeliveryDbo
    {
        [Key]
        public int Id { get; set; }
        
        public string Name { get; set; }
        
        public ICollection<OrderDbo> Orders { get; set; }
        
        public bool Completed { get; set; }
    }
}