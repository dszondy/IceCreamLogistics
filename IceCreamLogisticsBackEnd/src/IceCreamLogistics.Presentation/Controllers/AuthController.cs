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
        private IAuthService AuthService { get; }

        public AuthController(IAuthService authService)
        {
            AuthService = authService;
        }

        [AllowAnonymous]    
        [HttpPost]    
        public async Task<ActionResult<string>> Login([FromBody] LoginDto loginDto)
        {
            var token = await AuthService.AuthenticateUser(loginDto.Email, loginDto.Password);
            if (token is not null)
            {
                return Ok(token);
            }

            return NotFound();
        }   
    

        
        [HttpGet]    
        [Authorize]    
        public ActionResult<IEnumerable<string>> Get()    
        {    
            return new string[] { "value1", "value2", "value3", "value4", "value5" };    
        } 
    }
}   