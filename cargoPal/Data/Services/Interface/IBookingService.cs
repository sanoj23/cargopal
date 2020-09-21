using System.Collections.Generic;

namespace CargoPal.Data
{
    public interface IBookingService
    {
        IEnumerable<Bookings> GetBookings();
        Bookings GetBookingsById(int bookingId);
        IEnumerable<Bookings> GetBookingsByShipment(int shipmentId);
        IEnumerable<Bookings> GetBookingsByUser(int userId);
        void AddBooking(Bookings booking);
        void UpdateBooking(int bookingId, Bookings booking);
        void DeleteBooking(int bookingId);
    }
}