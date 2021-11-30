using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Application.Security;
using IceCreamLogistics.Presentation.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IceCreamLogistics.Presentation.Controllers
{
    [Route("auth")]    
    [ApiController]    
    public class AuthController : Controller
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [AllowAnonymous]    
        [HttpPost]    
        public async Task<ActionResult<string>> Login([FromBody] LoginDto loginDto)
        {
            var token = await _authService.AuthenticateUser(loginDto.Name, loginDto.Password);
            if (token is not null)
            {
                return Ok(token);
            }

            return NotFound();
        }   
    

        
        [HttpGet]    
        public ActionResult<IEnumerable<string>> Get()    
        {    
            return new string[] { "value1", "value2", "value3", "value4", "value5" };    
        }
        
        [HttpGet("current-user")]    
        public async Task<ActionResult<UserSecurityInfoDto>> GetCurrentUser()    
        {    
            return (await _authService.GetCurrentUser()).MapTo<UserSecurityInfoDto>();    
        }
    }
}   