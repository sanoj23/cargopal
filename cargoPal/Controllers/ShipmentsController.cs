using System;
using Microsoft.AspNetCore.Mvc;
using CargoPal.Data;

namespace CargoPal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class ShipmentsController : ControllerBase
    {
        private readonly IShipmentService _service;

        public ShipmentsController(IShipmentService service)
        {
            this._service = service;
        }

        [HttpGet("")]
        public IActionResult GetShipments()
        {
            try
            {
                var shipments = _service.GetShipments();
                return Ok(shipments);
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }

        [HttpGet("{shipmentId}")]
        public IActionResult GetShipmentsById(int shipmentId)
        {
            try
            {
                var shipment = _service.GetShipmentsById(shipmentId);
                return Ok(shipment);
            }
            catch (Exception error)
            {
                return NotFound(error.Message);
            }
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetShipmentsByUser(int userId)
        {
            try
            {
                var shipments = _service.GetShipmentsByUser(userId);
                return Ok(shipments);
            }
            catch (Exception error)
            {
                return NotFound(error.Message);
            }
        }

        [HttpPost("")]
        public IActionResult AddShipment([FromBody] Shipments shipment)
        {
            try
            {
                if (!ModelState.IsValid) { return BadRequest(); }

                _service.AddShipment(shipment);
                return Ok(shipment);
            }
            catch (Exception error)
            {
                return Conflict(error);
            }
        }

        [HttpPut("{shipmentId}")]
        public IActionResult UpdateShipment(int shipmentId, Shipments shipment)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest();
                }
                _service.UpdateShipment(shipmentId, shipment);
                return Ok(shipment);
            }
            catch (Exception error)
            {
                return Conflict(error.Message);
            }
        }

        [HttpDelete("{shipmentId}")]
        public IActionResult DeleteShipment(int shipmentId)
        {
            try
            {
                _service.DeleteShipment(shipmentId);
                return Ok("Shipment Deleted Successfully");
            }
            catch (Exception error)
            {
                return Conflict(error);
            }
        }
    }
}