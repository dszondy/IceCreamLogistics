using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace IceCreamLogistics.Application.Security
{
    internal class AuthService : IAuthService
    {
        public AuthService(IAuthRepository authRepository, IUserRepository userRepository, IHashingService hashingService, IUserTokenService userTokenService)
        {
            AuthRepository = authRepository;
            UserRepository = userRepository;
            HashingService = hashingService;
            UserTokenService = userTokenService;
        }

        private IAuthRepository AuthRepository { get; }
        private IUserRepository UserRepository { get; }
        private IHashingService HashingService { get; }
        private IUserTokenService UserTokenService { get; }

        public async Task<string> AuthenticateUser(string email, string password)
        {
            var user = await UserRepository.GetUserByEmail(email.ToLower());
            if (user is null)
                return null;
                var authInfo = await AuthRepository.GetAuthInfo(user.Id);
            var passwordHash = HashingService.CalculateHash(authInfo.Salt + password);
            if (passwordHash.Equals(authInfo.PasswordHash, StringComparison.OrdinalIgnoreCase))
            {
                return await UserTokenService.GenerateToken(user);
            }
            return null;
        }
    }
}