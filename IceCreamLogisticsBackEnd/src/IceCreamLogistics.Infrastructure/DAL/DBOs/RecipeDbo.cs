using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace IceCreamLogistics.Infrastructure.DAL.DBOs
{
    internal class RecipeDbo
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public bool CanBeOrdered { get; set; }
        public string DescriptionForLabels { get; set; }
        public decimal PricePerUnit { get; set; }
        public ICollection<RecipeIngredientDbo> Ingredients { get; set; }
    }
}