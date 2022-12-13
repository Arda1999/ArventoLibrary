using ArventoLibrary.Data.Dtos;
using ArventoLibrary.Data.Models;
using ArventoLibrary.Data.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ArventoLibrary.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;
        public BookController(IBookService bookService) {
        
            _bookService = bookService;
        }

        [HttpGet("{id}")]
        public Book GetSingleBook(Guid id)
        {
            return _bookService.Get(id);
        }
        [HttpDelete("{id}")]
        public Guid Delete(Guid id)
        {
            return _bookService.Delete(id);
        }
        [HttpPut("{id}")]
        public Book Update(Guid id, [FromBody] string name)
        {
            return _bookService.Update(id, name);
        }
        [HttpGet]
        public ICollection<Book> GetAllBooks()
        {
            return _bookService.GetAllBooks();
        }

        [HttpPost]
        public Book Save([FromBody] BookDto book)
        {
            return _bookService.Save(book);
        }



    }
}
