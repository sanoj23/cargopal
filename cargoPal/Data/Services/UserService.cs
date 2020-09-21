using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CargoPal.Helpers;
using System.Text.RegularExpressions;

namespace CargoPal.Data
{
    public class UserService : IUserService
    {
        private readonly CargoPalContext _CargoPalContext;

        public UserService(CargoPalContext systemContext)
        {
            _CargoPalContext = systemContext;
        }

        public Users Authenticate(AuthenticateModel user)
        {
            var userExists = _CargoPalContext.Users
                .SingleOrDefault(u => u.Email == user.email);

            if (userExists == null || !VerifyPassword(userExists.Password, user.password))
            {
                throw new Exception("Incorrect Email or Password");
            }
            // if (userExists.Status == "deactivated")
            // {
            //     userExists.Status = "active";
            // }

            _CargoPalContext.SaveChanges();

            return userExists;
        }

        public void AddUser(Users user)
        {
            string passwordPattern = @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]{8,}$";
            bool isPasswordValid = Regex.IsMatch(user.Password, passwordPattern);

            var passwordHash = HashPassword(user.Password);
            user.Password = passwordHash;

            // user.Status = "active";

            _CargoPalContext.Users.Add(user);
            _CargoPalContext.SaveChanges();
        }
        
        public IEnumerable<Users> GetUsers()
        {
            return _CargoPalContext.Users.ToList();
        }

        public Users GetUserById(int userId)
        {
           var userExists = _CargoPalContext.Users.FirstOrDefault(u => u.UserId == userId);
            if (userExists == null)
            {
                throw new Exception("User not Found");
            }
            else
            {
                return userExists;
            }
        }
        
        public IEnumerable<Users> GetUserByType(string userType)
        {
           var users = _CargoPalContext.Users.FirstOrDefault(u => u.UserType == userType);
            if (users == null)
            {
                throw new Exception("No users Found");
            }
            else
            {
               return _CargoPalContext.Users.Where(n => n.UserType == userType).ToList();
            }
        }

        public void UpdateUser(int userId, Users user)
        {
            var userToUpdate = _CargoPalContext.Users
                .FirstOrDefault(u => u.UserId == userId);

            // if (userToUpdate == null) { throw new Exception("Failed to Update"); }

            // if (!string.IsNullOrWhiteSpace(user.FirstName)) { userToUpdate.FirstName = user.FirstName; }
            // if (!string.IsNullOrWhiteSpace(user.LastName)) { userToUpdate.LastName = user.LastName; }
            // if (!string.IsNullOrWhiteSpace(user.Phone)) { userToUpdate.Phone = user.Phone; }
            // if (!string.IsNullOrWhiteSpace(user.Email) && user.Email != userToUpdate.Email)
            // {
            //     if (_CargoPalContext.Users.Any(u => u.Email == user.Email)) { throw new Exception("Email is already registered"); }
            //     userToUpdate.Email = user.Email;
            // }

            // if (!string.IsNullOrWhiteSpace(user.BusinessName) && user.BusinessName != userToUpdate.BusinessName)
            // {
            //     if (_CargoPalContext.Users.Any(u => u.BusinessName == user.BusinessName)) { throw new Exception("Business Name is already registered"); }
            //     userToUpdate.BusinessName = user.BusinessName;
            // }

            // if (!string.IsNullOrWhiteSpace(user.BusinessDescription)) { userToUpdate.BusinessDescription = user.BusinessDescription; }
            // if (!string.IsNullOrWhiteSpace(user.BusinessPhone)) { userToUpdate.BusinessPhone = user.BusinessPhone; }
            // if (!string.IsNullOrWhiteSpace(user.BusinessAddress)) { userToUpdate.BusinessAddress = user.BusinessAddress; }
            // if (!string.IsNullOrWhiteSpace(user.BusinessType)) { userToUpdate.BusinessType = user.BusinessType; }

            _CargoPalContext.SaveChanges();
        }

        public void DeactivateUser(int userId)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteUser(int userId)
        {
            throw new System.NotImplementedException();
        }

        private static string HashPassword(string password)
        {
            var algorithm = new Rfc2898DeriveBytes(password, 16, 10000);

            var key = Convert.ToBase64String(algorithm.GetBytes(32));
            var salt = Convert.ToBase64String(algorithm.Salt);

            return $"{salt}|{key}";
        }

        private static bool VerifyPassword(string passwordHash, string password)
        {
            var parts = passwordHash.Split('|', 2);

            if (parts.Length != 2)
            {
                throw new FormatException("Unexpected hash format");
            }

            var salt = Convert.FromBase64String(parts[0]);
            var key = Convert.FromBase64String(parts[1]);

            using (var algorithm = new Rfc2898DeriveBytes(password, salt, 10000))
            {
                var keyToCheck = algorithm.GetBytes(32);

                return keyToCheck.SequenceEqual(key);
            }
        }

    }
}