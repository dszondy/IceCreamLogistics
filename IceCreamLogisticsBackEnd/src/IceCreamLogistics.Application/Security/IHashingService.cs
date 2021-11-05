namespace IceCreamLogistics.Application.Security
{
    public interface IHashingService
    {
        string CalculateHash(string value);
    }
}