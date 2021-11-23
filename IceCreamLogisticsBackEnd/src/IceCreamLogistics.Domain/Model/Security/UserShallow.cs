using System.ComponentModel.DataAnnotations;

namespace IceCreamLogistics.Domain.Security
{
    public class UserShallow
    {
        [Key]
        public int Id { get; set; }
        
        [EmailAddress]
        public string Email { get; init; }
        
        [MaxLength(127)]
        public string Name { get; init; }
    }
}