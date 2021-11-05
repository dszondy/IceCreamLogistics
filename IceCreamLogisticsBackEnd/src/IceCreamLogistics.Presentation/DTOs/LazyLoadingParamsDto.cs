using Microsoft.AspNetCore.Mvc;

namespace IceCreamLogistics.Presentation.DTOs
{
    public class LazyLoadingParamsDto
    {
        [FromQuery]
        public int Offset { get; set; }
        [FromQuery]
        public int Count { get; set; }
    }
}