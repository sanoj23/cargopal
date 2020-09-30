using System;
using System.Collections.Generic;
using System.Linq;

namespace CargoPal.Data
{
    public class BookingService : IBookingService
    {
        readonly CargoPalContext _CargoPalContext;

        public BookingService(CargoPalContext systemsContext)
        {
            _CargoPalContext = systemsContext;
        }
        public IEnumerable<Bookings> GetBookings()
        {
            return _CargoPalContext.Bookings.ToList();
        }
        public Bookings GetBookingsById(int bookingId)
        {
            var bookingExists = _CargoPalContext.Bookings.FirstOrDefault(s => s.BookingId == bookingId);
            if (bookingExists == null)
            {
                throw new Exception("Booking Not Found");
            }
            else
            {
                return _CargoPalContext.Bookings.FirstOrDefault(b => b.BookingId == bookingId);
            }
        }

        public IEnumerable<Bookings> GetBookingsByShipment(int shipmentId)
        {
            var bookingExists = _CargoPalContext.Bookings.FirstOrDefault(s => s.ShipmentId == shipmentId);
            if (bookingExists == null)
            {
                throw new Exception("Booking Not Found");
            }
            else
            {
                return _CargoPalContext.Bookings.Where(s => s.ShipmentId == shipmentId).ToList();
            }
        }

        public IEnumerable<Bookings> GetBookingsByUser(int userId)
        {
            var bookingExists = _CargoPalContext.Bookings.FirstOrDefault(b => b.UserId == userId);
            if (bookingExists == null)
            {
                throw new Exception("Booking Not Found");
            }
            else
            {
                return _CargoPalContext.Bookings.Where(b => b.UserId == userId).ToList();
            }
        }
        public void AddBooking(Bookings booking)
        {
            if (booking == null)
            {
                throw new Exception("Incomplete Booking");
            }
            else
            {
                _CargoPalContext.Bookings.Add(booking);
                _CargoPalContext.SaveChanges();
            }
        }

        public void UpdateBooking(int bookingId, Bookings booking)
        {
            var bookingExists = _CargoPalContext.Bookings.FirstOrDefault(s => s.BookingId == bookingId);
            if (bookingExists != null)
            {
                //    get update booking model and validate
                _CargoPalContext.SaveChanges();
            }
            else
            {
                throw new Exception("Failed to Update");
            }
        }

        public void DeleteBooking(int bookingId)
        {
            var bookingExists = _CargoPalContext.Bookings.FirstOrDefault(n => n.BookingId == bookingId);
            if (bookingExists == null)
            {
                throw new Exception("Booking Not Found.");
            }
            else
            {
                if (bookingExists.Status == "Approved")
                {
                    throw new Exception("Cannot Delete Booking once approved.");
                }
                else
                {
                    _CargoPalContext.Bookings.Remove(bookingExists);
                    _CargoPalContext.SaveChanges();
                }
            }
        }
    }
}