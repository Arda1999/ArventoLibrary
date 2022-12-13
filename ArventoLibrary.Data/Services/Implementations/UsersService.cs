using ArventoLibrary.Data.Dtos;
using ArventoLibrary.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArventoLibrary.Data.Services.Implementations
{
    public class UsersService : IUsersService
    {
        private readonly stokContext _stokContext;
        public UsersService(stokContext stokContext)
        {

            _stokContext = stokContext;
        }

        public ICollection<User> GetAllUsers()
        {
            return _stokContext.Users.ToList();
        }
    }
}
