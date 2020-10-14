using System;
using System.Collections.Generic;

namespace CargoPal.Data
{
    public partial class Shipments
    {
        public Shipments()
        {
            Bookings = new HashSet<Bookings>();
        }

        public int ShipmentId { get; set; }
        public int? UserId { get; set; }
        public string Origin { get; set; }
        public string Destination { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public double Capacity { get; set; }
        public string Status { get; set; }
        public double Price { get; set; }

        public virtual Users User { get; set; }
        public virtual ICollection<Bookings> Bookings { get; set; }
    }
}
