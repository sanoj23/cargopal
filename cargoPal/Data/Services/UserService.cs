using System.Collections.Generic;
using System.Linq;

namespace Users.Data
{
    public class UserService : IUserService
    {
        public void AddUser(User user)
        {
            Data.Users.Add(user);
        }
        public List<User> GetUsers() => Data.Users.ToList();

        public User GetUserById(int userId)
        {
            throw new System.NotImplementedException();
        }

        public void UpdateUser(int userId, User user)
        {
            throw new System.NotImplementedException();
        }

        public void DeactivateUser(int userId)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteUser(int userId)
        {
            throw new System.NotImplementedException();
        }


    }
}