﻿using System;
using System.Collections.Generic;

namespace ArventoLibrary.Data.Models
{
    public partial class User
    {
        public Guid Id { get; set; }
        public string Username { get; set; } = null!;
        public string Password { get; set; } = null!;
    }
}
