using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Application;
using IceCreamLogistics.Presentation.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace IceCreamLogistics.Presentation.Controllers
{
    [Route("dashboard")]    
    [ApiController]    
    public class DashboardController: Controller    {
        private readonly IDashboardService _dashboardService;

        public DashboardController(IDashboardService dashboardService)
        {
            _dashboardService = dashboardService;
        }
        
        [HttpGet]
        [Route("recipes/last30")]
        public async Task<ActionResult<IEnumerable<DashboardValueDto>>> GetLast30DaysRecipes()
        {
            var recipes = await _dashboardService.GetPopularRecipesLast30Days();
            
            return Ok(recipes.Select(x => x.MapTo<DashboardValueDto>()));
        }
    }
}