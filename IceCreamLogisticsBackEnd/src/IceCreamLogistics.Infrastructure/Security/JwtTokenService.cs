using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using IceCreamLogistics.Application.Security;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Domain.Security;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace IceCreamLogistics.Infrastructure.Security
{
    public class JwtTokenService: ISecurityService, IUserTokenService
    {
        public JwtTokenService(IConfiguration config)
        {
            Config = config;
        }

        private IConfiguration Config { get; }

        public Task<string> GenerateToken(User user)    
        {    
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Config["Jwt:Key"]));    
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            IEnumerable<Claim> claims = new []
            {
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Name, user.Name),
            }.Concat(
                user.Roles
                    .Select(x => new Claim(ClaimTypes.Role, x.ToString())));

            var token = new JwtSecurityToken(Config["Jwt:Issuer"],    
                Config["Jwt:Issuer"],    
                claims,    
                expires: DateTime.Now.AddDays(1),    
                signingCredentials: credentials);
            

    
            return Task.FromResult(new JwtSecurityTokenHandler()
                .WriteToken(token));    
        }

        public Task<int> GetUserId()
        {
            throw new NotImplementedException();
        }

        public Task<Role[]> GetRoles()
        {
            throw new NotImplementedException();
        }

        public Task<bool> HasRole(Role role)
        {
            throw new NotImplementedException();
        }

        public Task<int> GetClientId()
        {
            throw new NotImplementedException();
        }

        public Task<Client> GetClientOwned()
        {
            throw new NotImplementedException();
        }
    }
}