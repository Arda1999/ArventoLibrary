using ArventoLibrary.Data.Models;
using ArventoLibrary.Data.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ArventoLibrary.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUsersService _usersService;
        public UsersController(IUsersService usersService) {
        
            _usersService = usersService;
        }

        [HttpGet]
        public ICollection<User> Get()
        {
            return _usersService.GetAllUsers();
        }

    }
}
