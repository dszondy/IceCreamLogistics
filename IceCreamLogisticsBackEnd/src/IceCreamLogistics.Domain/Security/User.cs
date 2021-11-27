using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata;
using IceCreamLogistics.Domain.Security;

namespace IceCreamLogistics.Domain
{
    public class User
    {
        public int Id { get; set; }
        
        public string Email { get; init; }
        public string Name { get; init; }
        
        public IEnumerable<Role> Roles { get; init; }
        public Client Client { get; init; }
    }
}