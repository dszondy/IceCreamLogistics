using System.Collections;
using System.Collections.Generic;
using IceCreamLogistics.Domain.Security;

namespace IceCreamLogistics.Presentation.DTOs
{
    public class UserSecurityInfoDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public ClientDto Client { get; set; }
        public IEnumerable<Role> Roles { get; set; }
    }
}