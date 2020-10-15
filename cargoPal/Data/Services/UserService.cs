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

        public void ResetPassword(int userId, ResetPassword password)
        {
            var userToUpdate = _CargoPalContext.Users
            .FirstOrDefault(u => u.UserId == userId);

            if (userToUpdate == null)
            {
                throw new Exception("Failed to Update");
            }

            if (string.IsNullOrWhiteSpace(password.CurrentPassword) || string.IsNullOrWhiteSpace(password.NewPassword) || string.IsNullOrWhiteSpace(password.ConfirmNewPassword))
            {
                throw new Exception("All fields required");
            }

            // if (!VerifyPassword(userToUpdate.Password, password.CurrentPassword))
            // {
            //     throw new Exception("Current password is incorrect");
            // }

            if (password.CurrentPassword == password.NewPassword)
            {
                throw new Exception("Your new password cannot be the same as your current password");
            }

            if (password.NewPassword != password.ConfirmNewPassword)
            {
                throw new Exception("New password and its confirmation do not match");
            }

            var passwordHash = HashPassword(password.NewPassword);
            userToUpdate.Password = passwordHash;

            _CargoPalContext.SaveChanges();
        }

        public void AddUser(Users user)
        {
            string passwordPattern = @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]{8,}$";
            bool isPasswordValid = Regex.IsMatch(user.Password, passwordPattern);

            var passwordHash = HashPassword(user.Password);
            user.Password = passwordHash;

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

        public void UpdateAgent(int userId, UpdateAgent agent)
        {
            var userToUpdate = _CargoPalContext.Users
                .FirstOrDefault(u => u.UserId == userId);
            _CargoPalContext.SaveChanges();
        }
        public void UpdateClient(int userId, UpdateClient client)
        {
            var userToUpdate = _CargoPalContext.Users
                .FirstOrDefault(u => u.UserId == userId);
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