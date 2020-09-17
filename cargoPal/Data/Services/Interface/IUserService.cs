using System.Collections.Generic;

namespace Users.Data
{
    public interface IUserService
    {
        List<User> GetUsers();
        User GetUserById(int userId);
        void AddUser(User user);
        void UpdateUser(int userId, User user);
        void DeleteUser(int userId);
        void DeactivateUser(int userId);

    }
}