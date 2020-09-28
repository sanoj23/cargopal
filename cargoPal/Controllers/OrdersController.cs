// using System;
// using Microsoft.AspNetCore.Mvc;
// using CargoPal.Data;

// namespace CargoPal.Controllers
// {
//     [ApiController]
//     [Route("api/[controller]")]
//     public class OrdersController : ControllerBase
//     {
//         private readonly IOrderService _service;

//         public OrdersController(IOrderService service)
//         {
//             this._service = service;
//         }

//         [HttpGet("")]
//         public IActionResult GetOrders()
//         {
//             try
//             {
//                 var allOrders = _service.GetOrders();
//                 return Ok(allOrders);
//             }
//             catch (Exception error)
//             {
//                 return BadRequest(error.Message);
//             }
//         }

//     }
// }