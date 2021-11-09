using System.Collections.Generic;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Presentation.DTOs
{
    public class MixingBatchCreateDto
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public IEnumerable<MixingBatchCreateMemberDto> Members { get; set; }
    }


    public class MixingBatchCreateMemberDto
    {
        public int OrderId { get; set; }
        public IEnumerable<MixingBatchCreateItemDto> Items { get; set; }
    }

    public class MixingBatchCreateItemDto
    {
        public int RecipeId { get; set; }
        public decimal Amount { get; set; }
    }

}