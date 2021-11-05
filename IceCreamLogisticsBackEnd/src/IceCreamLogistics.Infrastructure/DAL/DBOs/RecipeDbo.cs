using System.ComponentModel.DataAnnotations;

namespace IceCreamLogistics.Infrastructure.DAL.DBOs
{
    internal class RecipeDbo
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public bool CanBeOrdered { get; set; }

    }
}