using System.ComponentModel.DataAnnotations;
using IceCreamLogistics.Domain.Security;

namespace IceCreamLogistics.Infrastructure.DAL.DBOs
{
    internal class BasicAuthInfoDbo
    {
        [Key]
        public int UserId { get; set; }
        
        public string PasswordHash { get; set; }
        
        public string Salt { get; set; }
    }
}