using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProConvenios.API.Data;
using ProConvenios.API.Models;

namespace ProConvenios.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ConvenioController : ControllerBase
    {
        private readonly DataContext _context;

        public ConvenioController(DataContext context)
        {
            this._context = context;
        }

        [HttpGet]
        public IEnumerable<Convenio> Get()
        {
            return _context.Convenios;
        }

        [HttpGet("{id}")]
        public Convenio GetById(int id)
        {
            return _context.Convenios.FirstOrDefault(convenio => convenio.ConvenioId == id);
        }

        [HttpPost]
        public string Post()
        {
            return "Exemplo de Post";
        }

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"Exemplo de Put com id = {id}";
        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"Exemplo de Delete com id = {id}";
        }

    }
}
