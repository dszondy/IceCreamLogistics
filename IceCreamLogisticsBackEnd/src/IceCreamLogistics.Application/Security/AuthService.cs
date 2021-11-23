using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
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
            _rng = RandomNumberGenerator.Create();
        }

        private IAuthRepository AuthRepository { get; }
        private IUserRepository UserRepository { get; }
        private IHashingService HashingService { get; }
        private IUserTokenService UserTokenService { get; }
        private readonly RandomNumberGenerator _rng;

        public async Task<string> AuthenticateUser(string email, string password)
        {
            var user = await UserRepository.GetUserByEmail(email.ToLower());
            if (user is null)
                return null;
                var authInfo = await AuthRepository.GetAuthInfo(user.Id);
            var passwordHash = HashingService.CalculateHash(password: password, salt: authInfo.Salt);
            if (passwordHash.Equals(authInfo.PasswordHash, StringComparison.OrdinalIgnoreCase))
            {
                return await UserTokenService.GenerateToken(user);
            }
            return null;
        }

        public async Task ChangePassword(int userId, string password)
        {
            var salt = new byte[128];
            _rng.GetBytes(salt);
            var passwordHash = HashingService.CalculateHash(password: password, salt: salt.ToString());
            
            var authInfo = await AuthRepository.GetAuthInfo(userId);
            authInfo.Salt = salt.ToString();
            authInfo.PasswordHash = passwordHash;
            
            await AuthRepository.UpsertAuthInfo(authInfo);
        }
    }
}