using Microsoft.EntityFrameworkCore;
using Contratos.WebAPI.Model;

namespace Contratos.WebAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}
        public DbSet<Contratos> Contratos { get; set; }
    }
}

//Microsoft.EntityFrameworkCore
//https://docs.microsoft.com/pt-br/ef/core/get-started/overview/install