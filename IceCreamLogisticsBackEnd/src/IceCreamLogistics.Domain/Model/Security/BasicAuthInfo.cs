using System.ComponentModel.DataAnnotations;

namespace IceCreamLogistics.Domain.Security
{
    public class BasicAuthInfo
    {
        public int UserId { get; set; }
        
        public string PasswordHash { get; set; }
        
        public string Salt { get; set; }
    }
}