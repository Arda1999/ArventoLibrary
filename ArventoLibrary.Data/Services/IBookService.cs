using ArventoLibrary.Data.Dtos;
using ArventoLibrary.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArventoLibrary.Data.Services
{
    public interface IBookService
    {
       Book Save(BookDto book);
        Guid Delete(Guid id);
       
        Book Update(Guid id, string name);

        ICollection<Book> GetAllBooks();

        Book Get(Guid id);

    }
}
