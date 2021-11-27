using System.ComponentModel.DataAnnotations;

namespace IceCreamLogistics.Domain.Security
{
    public class UserShallow
    {
        public int Id { get; set; }
        
        public string Email { get; init; }
        
        public string Name { get; init; }
    }
}