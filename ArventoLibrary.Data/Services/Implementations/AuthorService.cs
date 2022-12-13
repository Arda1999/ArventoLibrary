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
        public class AuthorService : IAuthorService
        {
            private readonly stokContext _stokContext;
            public AuthorService(stokContext stokContext)
            {

                _stokContext = stokContext;
            }

            public Guid Delete(Guid id)
            {
                var author = _stokContext.Authors.FirstOrDefault(x => x.Id.Equals(id));
                _stokContext.Authors.Remove(author);
            var books = _stokContext.Books.Where(x => x.AuthorId.Equals(id)).ToList();
            _stokContext.Books.RemoveRange(books);
                _stokContext.SaveChanges();
                return id;
            }

            public Author Get(Guid id)
            {
                return _stokContext.Authors.Include(author => author.Books).FirstOrDefault(x => x.Id.Equals(id));

            }

            public ICollection<Author> GetAllAuthors()
            {
                return _stokContext.Authors.ToList();
            }

            public Author Save(AuthorDto author)
            {
                Author a = new Author();
                a.Id = author.Id;
                a.Name = author.Name;

                _stokContext.Authors.Add(a);
                _stokContext.SaveChanges();
                return a;

            }

            public Author Update(Guid id, string name)
            {
                var author = _stokContext.Authors.FirstOrDefault(
                  x => x.Id.Equals(id));
                author.Name = name;
                _stokContext.SaveChanges();
                return author;
            }
        }
    }
