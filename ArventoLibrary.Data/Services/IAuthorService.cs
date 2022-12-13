using ArventoLibrary.Data.Dtos;
using ArventoLibrary.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArventoLibrary.Data.Services
{
    public interface IAuthorService
    {
       Author Save(AuthorDto author);
        Guid Delete(Guid id);
       
        Author Update(Guid id, string name);

        ICollection<Author> GetAllAuthors();

        Author Get(Guid id);

    }
}
