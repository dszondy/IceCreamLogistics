namespace IceCreamLogistics.Domain
{
    public class Client
    {
        public int Id { get; set; }
        public string Name	 { get; set; }
        public Address Address { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

    }
    
    public class ClientShallow
    {
        public int Id { get; set; }
        public string Name	 { get; set; }
        public int AddressId { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

    }
}