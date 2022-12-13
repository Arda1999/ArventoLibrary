﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArventoLibrary.Data.Dtos
{
    public class BookDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }

        public Guid AuthorId { get; set; }
    }
}
