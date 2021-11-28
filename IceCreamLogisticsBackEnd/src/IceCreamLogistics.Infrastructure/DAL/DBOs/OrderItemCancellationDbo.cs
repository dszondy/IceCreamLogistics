using System.ComponentModel.DataAnnotations;

namespace IceCreamLogistics.Infrastructure.DAL.DBOs
{
    internal class OrderItemCancellationDbo
    {
        [Key]
        public int Id{ get; set; }
        
        public int OrderItemId { get; set; }
        public decimal Amount { get; set; }
    }
}