using System;
using System.Collections.Generic;

namespace CargoPal.Data
{
    public partial class Bookings
    {
        public Bookings() {}

        public int BookingId { get; set; }
        public int? UserId { get; set; }
        public int? ShipmentId { get; set; }

        public string ReceiverName { get; set; }
        public string ReceiverPhone { get; set; }
        public string ReceiverAddress { get; set; }
        public string Item { get; set; }
        public string Instructions { get; set; }
        public string Packaging { get; set; }
        public string Status { get; set; }


        public virtual Users User { get; set; }
        public virtual Shipments Shipment { get; set; }
    }
}