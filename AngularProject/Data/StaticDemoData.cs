using AngularProject.Models;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Threading.Tasks;

namespace AngularProject.Data
{
    public static class StaticDemoData
    {
        public static readonly DemoUser[] DemoUsers = new DemoUser[]
        {
            new DemoUser("user1", "&Us001", "user1@example.com"),
            new DemoUser("user2", "&Us002", "user2@example.com"),
            new DemoUser("admin", "&Ad000", "admin@example.com")
        };

        public static async Task CheckUsers(UserManager<ApplicationUser> userManager)
        {
            var demoUsers = DemoUsers;
            var dbUsers = userManager.Users.Select(x => x.UserName).ToArray();
            var usersToCreate = demoUsers.Where(x => !dbUsers.Contains(x.Name));
            foreach (var user in usersToCreate)
            {
                await userManager.CreateAsync(new ApplicationUser()
                {
                    UserName = user.Name,
                    Email = user.Email,
                    EmailConfirmed = true
                }, user.Password);
            }
        }
    }

}
