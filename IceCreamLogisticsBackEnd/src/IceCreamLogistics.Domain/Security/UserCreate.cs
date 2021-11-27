using System.Collections.Generic;

namespace IceCreamLogistics.Domain.Security
{
    public class UserCreate
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public int ClientId { get; set; }
        public IEnumerable<Role> Roles { get; set; }
    }
}   