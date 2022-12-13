using ArventoLibrary.Data.Dtos;
using ArventoLibrary.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArventoLibrary.Data.Services
{
    public interface IUsersService
    {
        ICollection<User> GetAllUsers();

    }
}
