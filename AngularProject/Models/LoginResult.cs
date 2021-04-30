using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularProject.Models
{
    public class LoginResult : BaseResult
    {
        public string UserName { get; set; }

        public LoginResult(string error = null, string userName = null) : base(error)
        {
            UserName = userName;
        }

        public LoginResult(string error) : base(error)
        {}
    }
}
