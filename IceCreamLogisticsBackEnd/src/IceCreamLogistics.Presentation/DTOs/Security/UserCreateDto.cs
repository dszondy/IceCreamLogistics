using System.Collections.Generic;
using IceCreamLogistics.Domain.Security;

namespace IceCreamLogistics.Presentation.DTOs
{
    public class UserCreateDto
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public int ClientId { get; set; }
        public IEnumerable<Role> Roles { get; set; }
    }
}