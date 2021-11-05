using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata;
using IceCreamLogistics.Domain.Security;

namespace IceCreamLogistics.Domain
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        
        [EmailAddress]
        public string Email { get; init; }
        
        [MaxLength(127)]
        public string Name { get; init; }
        
        public IEnumerable<Role> Roles { get; init; }
    }
}