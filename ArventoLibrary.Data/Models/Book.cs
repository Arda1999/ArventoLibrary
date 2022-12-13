using System;
using System.Collections.Generic;

namespace ArventoLibrary.Data.Models
{
    public partial class Book
    {
        public string Name { get; set; } = null!;
        public Guid Id { get; set; }
        public Guid AuthorId { get; set; }

        public virtual Author Author { get; set; } = null!;
    }
}
