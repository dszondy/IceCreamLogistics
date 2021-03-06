using System.ComponentModel.DataAnnotations;

namespace IceCreamLogistics.Infrastructure.DAL.DBOs
{
    internal class ClientDbo
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

        public AddressDbo Address { get; set; }
        public int AddressId { get; set; }
        public bool IsActive { get; set; }
    }
}