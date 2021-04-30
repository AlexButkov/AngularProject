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
    public class LogoutController : ControllerBase
    {
        private readonly SignInManager<ApplicationUser> _signInManager;

        public LogoutController(SignInManager<ApplicationUser> signInManager)
        {
            _signInManager = signInManager;
        }

        [HttpGet]
        public async Task<BaseResult> Get(string user, string password = null, string returnUrl = null)
        {
            await _signInManager.SignOutAsync();
            return new BaseResult();
        }
    }
}
