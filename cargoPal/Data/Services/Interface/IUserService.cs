using System.Collections.Generic;
using System.Threading.Tasks;

namespace CargoPal.Data
{
    public interface IUserService
    {
        Users Authenticate(AuthenticateModel user);
        IEnumerable<Users> GetUsers();
        Users GetUserById(int userId);
        IEnumerable<Users> GetUserByType(string userType);
        void AddUser(Users user);
        void UpdateUser(int userId, Users user);
        void DeleteUser(int userId);
        void DeactivateUser(int userId);
    }
}






