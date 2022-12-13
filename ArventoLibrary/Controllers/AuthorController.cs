using ArventoLibrary.Data.Dtos;
using ArventoLibrary.Data.Models;
using ArventoLibrary.Data.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ArventoLibrary.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthorController : ControllerBase
    {
        private readonly IAuthorService _authorService;
        public AuthorController(IAuthorService authorService)
        {

            _authorService = authorService;
        }
        [HttpGet]
        public ICollection<Author> GetAllAuthor()
        {
            return _authorService.GetAllAuthors();
        }
        [HttpGet("{authorId}")]
        public Author GetAuthorById(Guid authorId)
        {
            return _authorService.Get(authorId);
        }

        [HttpDelete("{authorId}")]
        public Guid DeleteAuthor(Guid authorId)
        {
            return _authorService.Delete(authorId);
        }
        [HttpPut("{authorId}")]
        public Author UpdateAuthor(Guid authorId,[FromBody] string name)
        {
            return _authorService.Update(authorId,name);
        }

        [HttpPost]
        public Author SaveAuthor([FromBody] AuthorDto author)
        {
            return _authorService.Save(author);
        }



    }
}
