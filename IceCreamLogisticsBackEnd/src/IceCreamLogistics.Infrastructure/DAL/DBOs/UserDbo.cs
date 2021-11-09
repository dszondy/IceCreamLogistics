using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using IceCreamLogistics.Domain.Security;

namespace IceCreamLogistics.Infrastructure.DAL.DBOs
{
    internal class UserDbo
    {
        [Key]
        public int Id { get; set; }
    
        [EmailAddress]
        public string Email { get; set; }
    
        [MaxLength(127)]
        public string Name { get; set; }
    

        public ICollection<RoleDbo> Roles { get; set; }
        public BasicAuthInfoDbo BasicAuthInfo { get; set; }
        public bool IsActive { get; set; }
    }
}