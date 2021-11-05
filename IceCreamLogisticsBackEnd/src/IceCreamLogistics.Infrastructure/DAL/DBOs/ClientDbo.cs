using System.ComponentModel.DataAnnotations;

namespace IceCreamLogistics.Infrastructure.DAL.DBOs
{
    public class ClientDbo
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }
        
        public AddressDbo Address { get; set; }
        public int AddressId { get; set; }
    }
}