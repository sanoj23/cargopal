// using System.ComponentModel.DataAnnotations;

namespace Users.Data
{
    public class AuthenticateModel
    {
        [Required]
        public string email { get; set; }

        [Required]
        public string password { get; set; }
    }
}