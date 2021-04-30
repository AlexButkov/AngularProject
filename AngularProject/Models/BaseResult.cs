using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularProject.Models
{
    public class BaseResult
    {
        public string Error { get; set; }

        public BaseResult(string error = null)
        {
            Error = error;
        }
    }
}
