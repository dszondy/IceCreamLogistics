using System.Collections;
using System.Collections.Generic;

namespace IceCreamLogistics.Presentation.DTOs
{
    public class LazyLoadingResponse<T>
    {
        public int Offset { get; set; }
        public int Count { get; set; }
        public int NextOffset { get; set; }
        public bool HasMore { get; set; }
        public IEnumerable<T> Content { get; set; }
    }
}