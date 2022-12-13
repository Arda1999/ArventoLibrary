using ArventoLibrary.Data.Dtos;
using ArventoLibrary.Data.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace ArventoLibrary.Data.Services.Implementations
{
    public class BookService : IBookService
    {
        private readonly stokContext _stokContext;
        public BookService(stokContext stokContext) {
        
            _stokContext = stokContext;
        }

        public Guid Delete(Guid id)
        {
            var book = _stokContext.Books.FirstOrDefault(x => x.Id.Equals(id));
            _stokContext.Books.Remove(book);
            _stokContext.SaveChanges();
            return id;
        }

        public Book Get(Guid id)
        {
            return _stokContext.Books.Include(book => book.Author).FirstOrDefault(x => x.Id.Equals(id));
        }

        public ICollection<Book> GetAllBooks()
        {
            return _stokContext.Books.Include(book => book.Author).ToList();
        }

        public Book Save(BookDto book)
        {
            Book b = new Book();
            b.Id = book.Id;
            b.Name = book.Name;
            b.AuthorId = book.AuthorId;
            _stokContext.Books.Add(b);
            _stokContext.SaveChanges();
            return b;
        }

        public Book Update(Guid id , string name)
        {
            var book = _stokContext.Books.FirstOrDefault(
                x => x.Id.Equals(id));
            book.Name = name;
            _stokContext.SaveChanges();
            return book;
            
        }

    }
}
