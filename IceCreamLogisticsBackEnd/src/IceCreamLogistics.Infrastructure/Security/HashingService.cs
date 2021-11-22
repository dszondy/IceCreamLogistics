using System;
using System.Security.Cryptography;
using System.Text;
using IceCreamLogistics.Application.Security;

namespace IceCreamLogistics.Infrastructure.Security
{
    public class HashingService: IHashingService
    {
        private static readonly MD5 Md5 = MD5.Create();
        public string CalculateHash(string value)
        {
            return Convert.ToBase64String(Md5.ComputeHash(Encoding.Unicode.GetBytes(value)));

        }
    }
}