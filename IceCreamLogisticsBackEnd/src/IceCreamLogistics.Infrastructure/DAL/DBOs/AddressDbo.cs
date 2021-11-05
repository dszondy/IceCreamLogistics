using System.ComponentModel.DataAnnotations;

namespace IceCreamLogistics.Infrastructure.DAL.DBOs
{
    public class AddressDbo
    {
        [Key] 
        public int Id { get; set; }
        
        public string Country { get; set; }
        public string Zip { get; set; }
        public string Region { get; set; }
        public string City { get; set; }
        public string AddressLine { get; set; }
    }
}