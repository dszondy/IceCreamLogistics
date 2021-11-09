namespace IceCreamLogistics.Presentation.DTOs
{
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using Microsoft.EntityFrameworkCore.Metadata.Internal;

    namespace IceCreamLogistics.Domain
    {
        public class MixingBatchDetailsDto
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public DateTime Created { get; set; }
            public IEnumerable<MixingBatchMemberDto> Members { get; set; }
        }
    
        public class MixingBatchMemberDto
        {
            public OrderDto Order { get; set; }
            public IEnumerable<MixingBatchItemDto> Items { get; set; }
        }

        public class MixingBatchItemDto
        {
            public RecipeDto Recipe { get; set; }
            public decimal Amount { get; set; }
            public decimal CompletedAmount { get; set; }
        }
    }   
}