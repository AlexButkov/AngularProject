using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularProject.Data
{
    public static class StaticDemoData
    {
        public static readonly Dictionary<string, string> UsersDemoInfo = new() 
        {
            ["user1"] = "&Us001",
            ["user2"] = "&Us002",
            ["admin"] = "&Ad000"
        };
    }
}
