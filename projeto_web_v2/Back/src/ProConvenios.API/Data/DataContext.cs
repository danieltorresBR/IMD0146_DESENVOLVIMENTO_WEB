using Microsoft.EntityFrameworkCore;
using ProConvenios.API.Models;

namespace ProConvenios.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}
    
        public DbSet<Convenio> Convenios { get; set; }
    }
}