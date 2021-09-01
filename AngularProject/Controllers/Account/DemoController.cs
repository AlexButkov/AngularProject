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
    public class DemoController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public DemoController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpGet]
        public async Task<IEnumerable<string>> Get()
        {
            await StaticDemoData.CheckUsers(_userManager);

            var result = StaticDemoData.DemoUsers.Select(x => x.Name).ToArray();
            return result;
        }
    }
}
