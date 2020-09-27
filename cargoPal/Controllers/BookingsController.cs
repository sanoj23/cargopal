using System;
using Microsoft.AspNetCore.Mvc;
using CargoPal.Data;

namespace CargoPal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class BookingsController : ControllerBase
    {
        private readonly IBookingService _service;

        public BookingsController(IBookingService service)
        {
            this._service = service;
        }

        [HttpGet("")]
        public IActionResult GetBookings()
        {
            try
            {
                var bookings = _service.GetBookings();
                return Ok(bookings);
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }

        [HttpGet("{bookingId}")]
        public IActionResult GetBookingsById(int bookingId)
        {
            try
            {
                var bookingExists = _service.GetBookingsById(bookingId);
                return Ok(bookingExists);
            }
            catch (Exception error)
            {
                return NotFound(error.Message);
            }
        }

        [HttpGet("shipment/{shipmentId}")]
        public IActionResult GetBookingsByShipment(int shipmentId)
        {
            try
            {
                var bookings = _service.GetBookingsByShipment(shipmentId);
                return Ok(bookings);
            }
            catch (Exception error)
            {
                return NotFound(error.Message);
            }
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetBookingsByUser(int userId)
        {
            try
            {
                var bookings = _service.GetBookingsByUser(userId);
                return Ok(bookings);
            }
            catch (Exception error)
            {
                return NotFound(error.Message);
            }
        }



        [HttpPost("")]
        public IActionResult AddBooking([FromBody] Bookings booking)
        {
            try
            {
                if (!ModelState.IsValid) { return BadRequest(); }
                // set status as pending 
                _service.AddBooking(booking);
                return Ok(booking);
            }
            catch (Exception error)
            {
                return Conflict(error.Message);
            }
        }

        [HttpPut("{bookingId}")]
        public IActionResult UpdateBooking(int bookingId, Bookings booking)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest();
                }
                _service.UpdateBooking(bookingId, booking);
                return Ok(booking);
            }
            catch (Exception error)
            {
                return Conflict(error.Message);
            }
        }

        [HttpDelete("{bookingId}")]
        public IActionResult DeleteBooking(int bookingId)
        {
            try
            {
                _service.DeleteBooking(bookingId);
                return Ok("Booking Deleted Successfully");
            }
            catch (Exception error)
            {
                return Conflict(error.Message);
            }
        }

    }
}