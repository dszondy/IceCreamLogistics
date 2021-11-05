using IceCreamLogistics.Domain;
using IceCreamLogistics.Domain.Security;

namespace IceCreamLogistics.Infrastructure
{
    internal class RoleDbo
    {
        public Role Role { get; set; }
        public int UserId { get; set; }
    }
}