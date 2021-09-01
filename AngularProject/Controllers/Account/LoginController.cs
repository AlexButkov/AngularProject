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
    public class LoginController : ControllerBase
    {
        private readonly SignInManager<ApplicationUser> _signInManager;

        public LoginController(SignInManager<ApplicationUser> signInManager)
        {
            _signInManager = signInManager;
        }

        [HttpGet]
        public async Task<LoginResult> Get(string user, string password = null)
        {
            password ??= StaticDemoData.DemoUsers.FirstOrDefault(x => x.Name == user)?.Password;

            if (password == null)
                return new LoginResult("Invalid login attempt!");

            var result = await _signInManager.PasswordSignInAsync(user, password, true, lockoutOnFailure: false);// To enable password failures to trigger account lockout, set lockoutOnFailure: true
            
            if (result.Succeeded)
            {
                return new LoginResult(userName: user);
            }
            if (result.IsLockedOut)
            {
                return new LoginResult("User account locked out!");
            }
            else
            {
                return new LoginResult("Invalid login attempt!");
            }
        }
    }
}
