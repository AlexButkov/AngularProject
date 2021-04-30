using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using AngularProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularProject.Data;

namespace AngularProject.Controllers.Account
{
    [Route("account/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;

        public UserController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [HttpGet]
        public async Task<LoginResult> Get()
        {
            if (!_signInManager.IsSignedIn(HttpContext.User))
                return new LoginResult("User is not signed in!");

            var userInfo = await _userManager.GetUserAsync(HttpContext.User);
            return new LoginResult(userName: userInfo.UserName);
        }
    }
}
