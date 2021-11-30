using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using IceCreamLogistics.Application;
using IceCreamLogistics.Application.Security;
using IceCreamLogistics.Domain.Security;
using IceCreamLogistics.Presentation.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IceCreamLogistics.Presentation.Controllers
{
    [Route("security")]    
    [ApiController]    
    public class SecurityController : Controller
    {
        private readonly IUserService _userService;
        private readonly IAuthService _authService;

        public SecurityController(IUserService userService, IAuthService authService)
        {
            _userService = userService;
            _authService = authService;
        }


        [HttpPost]    
        public async Task<ActionResult<UserSecurityInfoDto>> Create([FromBody] UserCreateDto userDto)
        {
            var result = await _userService.Create(userDto.MapTo<UserCreate>());
            return Ok(result.MapTo<UserSecurityInfoDto>());
        }   
    
        [HttpPut]
        [Route("{id}")]
        public async Task<ActionResult<UserSecurityInfoDto>> Update([FromBody] UserCreateDto userDto, [FromRoute] int id){
            var result = await _userService.Update(id, userDto.MapTo<UserCreate>());
            return Ok(result.MapTo<UserSecurityInfoDto>());
        }       
        
        [HttpPost]
        [Route("{id}/password")]
        public async Task<ActionResult> OverridePassword([FromRoute] int id, [FromBody] string password)
        {
            await _authService.ChangePassword(id, password);
            return Ok();
        }   
        
        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<UserSecurityInfoDto>> GetUserInfo([FromRoute] int id){    
            var result = await _userService.Get(id);
            return Ok(result.MapTo<UserSecurityInfoDto>());
        } 
        
        [HttpGet]
        public async Task<ActionResult<LazyLoadingResponse<UserShallowDto>>> List([FromQuery][Optional]string? search, [FromQuery] LazyLoadingParamsDto lazyLoadingParams){    
            var result = await _userService.Search(search, lazyLoadingParams.MapTo<LazyLoadingParams>());
            return Ok(result.ToLazyLoadingResponse(lazyLoadingParams));
        } 
    }
}