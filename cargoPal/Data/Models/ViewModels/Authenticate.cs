using System.ComponentModel.DataAnnotations;

namespace CargoPal.Data
{
    public class AuthenticateModel
    {
        [Required]
        public string email { get; set; }

        [Required]
        public string password { get; set; }
    }
}