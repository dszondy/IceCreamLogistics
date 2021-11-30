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
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using User = IceCreamLogistics.Domain.User;

namespace IceCreamLogistics.Infrastructure.Security
{
    public class JwtTokenService: ICurrentUserService, IUserTokenService
    {
        private readonly  HttpContext _httpContext;

        public JwtTokenService(IConfiguration config, IHttpContextAccessor httpContextAccessor)
        {
            Config = config;
            _httpContext = httpContextAccessor.HttpContext;
        }

        private IConfiguration Config { get; }

        public Task<string> GenerateToken(User user)    
        {    
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Config["Jwt:Key"]));    
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            IEnumerable<Claim> claims = (new []
            {
                new Claim(ClaimTypes.Email, user.Email?? ""),
                new Claim(ClaimTypes.Name, user.Name?? ""),
                new Claim("UserId", user.Id.ToString()),
            }).Concat(
                user.Roles
                    ?.Select(x => new Claim(ClaimTypes.Role, x.ToString()))
                ?? Enumerable.Empty<Claim>());
            
            if (user.Client is not null)
            {
                claims = claims.Append(new Claim("ClientId", user.Client?.Id.ToString()));
            }

            var token = new JwtSecurityToken(Config["Jwt:Issuer"],    
                Config["Jwt:Issuer"],    
                claims,    
                expires: DateTime.Now.AddDays(1),    
                signingCredentials: credentials);
            

    
            return Task.FromResult(new JwtSecurityTokenHandler()
                .WriteToken(token));    
        }

        public async Task<int> GetUserId()
        {
           return int.Parse(_httpContext.User.Claims.FirstOrDefault(x => x.Type == "UserId").Value);
        }

        public async Task<Role[]> GetRoles()
        {
            return (_httpContext.User.Claims.Where(x => x.Type == ClaimTypes.Role)
                .Select(x => (Role)Enum.Parse(typeof(Role), x.Value))).ToArray();
        }

        public async Task<bool> HasRole(Role role)
        {
            var roles = await GetRoles();
            return roles.Contains(role);
        }

        public async Task<int> GetClientId()
        {
            return int.Parse(_httpContext.User.Claims.FirstOrDefault(x => x.Type == "ClientId").Value);
        }
    }
}