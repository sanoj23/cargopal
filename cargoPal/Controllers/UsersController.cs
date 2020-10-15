using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Text;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using CargoPal.Data;
using CargoPal.Helpers;


namespace CargoPal.Controllers
{
    // [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _service;
        private readonly AppSettings _appSettings;

        public UserController(IUserService service, IOptions<AppSettings> appSettings)
        {
            this._service = service;
            this._appSettings = appSettings.Value;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody] AuthenticateModel model)
        {
            try
            {
                var user = _service.Authenticate(model);

                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim(ClaimTypes.Name, user.UserId.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddDays(7),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };

                var token = tokenHandler.CreateToken(tokenDescriptor);
                var tokenString = tokenHandler.WriteToken(token);

                return Ok(new
                {
                    UserId = user.UserId,
                    Email = user.Email,
                    Type = user.UserType,
                    Token = tokenString
                });
            }
            catch (Exception authException)
            {
                return Unauthorized(authException.Message);
            }

        }

        [AllowAnonymous]
        [HttpGet("")]
        public IActionResult GetUsers()
        {
            try
            {
                var allUsers = _service.GetUsers();
                return Ok(allUsers);
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }

        [HttpGet("{userId}")]
        [AllowAnonymous]
        public IActionResult GetUserById(int userId)
        {
            try
            {
                var user = _service.GetUserById(userId);
                return Ok(user);
            }
            catch (Exception getUserError)
            {
                return NotFound(getUserError.Message);
            }
        }

        [HttpGet("type/{userType}")]
        [AllowAnonymous]
        public IActionResult GetUserByType(string userType)
        {
            try
            {
                var user = _service.GetUserByType(userType);
                return Ok(user);
            }
            catch (Exception getUserError)
            {
                return NotFound(getUserError.Message);
            }
        }

        [HttpPost("")]
        [AllowAnonymous]
        public IActionResult AddUser([FromBody] Users user)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest("Please Enter Valid Data");
                }

                _service.AddUser(user);
                return Ok(user);
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }


        [HttpPut("agent/{userId}")]
        [AllowAnonymous]
        public IActionResult UpdateAgent(int userId, [FromBody] UpdateAgent agent)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest("");
                }

                _service.UpdateAgent(userId, agent);
                return Ok(_service.GetUserById(userId));
            }
            catch (Exception updateUserError)
            {
                return Conflict(updateUserError.Message);
            }
        }

        [HttpPut("client/{userId}")]
        [AllowAnonymous]
        public IActionResult UpdateClient(int userId, [FromBody] UpdateClient client)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest("");
                }

                _service.UpdateClient(userId, client);
                return Ok(_service.GetUserById(userId));
            }
            catch (Exception updateUserError)
            {
                return Conflict(updateUserError.Message);
            }
        }

        [HttpPut("{userId}/ResetPassword")]
        [AllowAnonymous]
        public IActionResult ResetPassword(int userId, [FromBody] ResetPassword password)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest("");
                }

                _service.ResetPassword(userId, password);
                return Ok(_service.GetUserById(userId));

            }
            catch (Exception error)
            {
                return Conflict(error.Message);
            }

        }


        // [AllowAnonymous]
        // [HttpPut("{userId}/DeactivateAccount")]
        // public IActionResult DeactivateAccount(int userId)
        // {
        //     try
        //     {
        //         _service.DeactivateAccount(userId);
        //         return Ok("Successfully Deactivated Account");
        //     }
        //     catch (Exception deactivateUserError)
        //     {
        //         return NotFound(deactivateUserError.Message);
        //     }

        // }

        [AllowAnonymous]
        [HttpDelete("{userId}")]
        public IActionResult DeleteUser(int userId)
        {
            try
            {
                // check if any pending orders
                _service.DeleteUser(userId);
                return Ok("Successfully Deleted User");
            }
            catch (Exception deleteUserError)
            {
                return NotFound(deleteUserError.Message);
            }

        }
    }
};