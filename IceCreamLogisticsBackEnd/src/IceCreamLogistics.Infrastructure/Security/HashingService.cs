using System;
using System.Security.Cryptography;
using System.Text;
using IceCreamLogistics.Application.Security;

namespace IceCreamLogistics.Infrastructure.Security
{
    public class HashingService: IHashingService
    {
        private static readonly SHA512 Hasher = SHA512.Create();
        public static string CalculateHash(string password, string salt)
        {
            return Convert.ToBase64String(Hasher.ComputeHash(Encoding.Unicode.GetBytes(password+salt)));

        }

        string IHashingService.CalculateHash(string password, string salt)
        {
            return CalculateHash(password, salt);
        }
    }
}