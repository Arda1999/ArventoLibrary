using System;
using System.Collections.Generic;

namespace ArventoLibrary.Data.Models
{
    public partial class Kutuphane
    {
        public int Id { get; set; }
        public string Yazarlar { get; set; } = null!;
        public string Kitaplar { get; set; } = null!;
    }
}
