using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using IceCreamLogistics.Domain.Security;

namespace IceCreamLogistics.Infrastructure.DAL.DBOs
{
    internal class UserDbo
    {
        [Key]
        public int Id { get; set; }
    
        public string Email { get; set; }
    
        public string Name { get; set; }
    

        public ICollection<RoleDbo> Roles { get; set; }
        public BasicAuthInfoDbo BasicAuthInfo { get; set; }
        public bool IsActive { get; set; }
        public int? ClientId { get; set; }
        public ClientDbo Client { get; set; }
    }
}