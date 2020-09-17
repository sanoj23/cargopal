using Microsoft.AspNetCore.Mvc;
using Users.Data;

namespace Users.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private IUserService _service;
        public UsersController(IUserService service)
        {
            this._service = service;
        }

        [HttpPost("addUsers")]
        public IActionResult AddUser([FromBody] User user)
        {
            if (user != null) { _service.AddUser(user); }
            return Ok();
        }
        [HttpGet("[action]")]
        public IActionResult GetUsers()
        {
            var allUsers = _service.GetUsers();
            return Ok(allUsers);
        }
    }
}