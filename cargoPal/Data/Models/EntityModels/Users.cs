using System;
using System.Collections.Generic;

namespace CargoPal.Data
{
    public partial class Users
    {
        public Users()
        {
            Shipments = new HashSet<Shipments>();
            Bookings = new HashSet<Bookings>();
        }

        public int UserId { get; set; }
        
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string CompanyName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Password { get; set; }
        public string UserType { get; set; }

        public virtual ICollection<Shipments> Shipments { get; set; }
        public virtual ICollection<Bookings> Bookings { get; set; }
    }
}