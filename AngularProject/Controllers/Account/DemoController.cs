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
        [HttpGet]
        public IEnumerable<string> Get()
        {
            var result = StaticDemoData.UsersDemoInfo.Keys.ToArray();
            return result;
        }
    }
}
