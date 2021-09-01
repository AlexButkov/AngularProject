using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularProject.Models
{
    public class DemoUser
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }

        public DemoUser(string name, string password, string email)
        {
            Name = name ?? throw new ArgumentNullException(nameof(name));
            Password = password ?? throw new ArgumentNullException(nameof(password));
            Email = email ?? throw new ArgumentNullException(nameof(email));
        }
    }
}
