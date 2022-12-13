using System;
using System.Collections.Generic;

namespace ArventoLibrary.Data.Models
{
    public partial class Author
    {
        public Author()
        {
            Books = new HashSet<Book>();
        }

        public string Name { get; set; } = null!;
        public Guid Id { get; set; }

        public virtual ICollection<Book> Books { get; set; }
    }
}
