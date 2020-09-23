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

        void ResetPassword(int userId, ResetPassword password);
        void AddUser(Users user);
        void UpdateAgent(int userId, UpdateAgent agent);
        void UpdateClient(int userId, UpdateClient client);
        void DeleteUser(int userId);
        void DeactivateUser(int userId);
    }
}






