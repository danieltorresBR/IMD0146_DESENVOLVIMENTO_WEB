using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProConvenios.API.Models;

namespace ProConvenios.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ConvenioController : ControllerBase
    {
        public IEnumerable<Convenio> _convenio = new Convenio[] {
                new Convenio() {
                    ConvenioId = 1,
                    DtInicio = DateTime.Now.AddDays(0).ToString(),
                    DtFim = DateTime.Now.AddDays(365).ToString(),
                    ProcessoTCE = "TCE_001-002",
                    LinkRedmine = "www.google.com.br/001",
                    ObjetoAcordo =  "Este é um teste de acordo"
                },
                new Convenio() {
                    ConvenioId = 2,
                    DtInicio = DateTime.Now.AddDays(-2).ToString(),
                    DtFim = DateTime.Now.AddDays(363).ToString(),
                    ProcessoTCE = "TCE_001-003",
                    LinkRedmine = "www.terra.com.br/aaa",
                    ObjetoAcordo =  "Este é um teste de acordo para evento 002"
                }                 
        };
        
        public ConvenioController()
        {
        }

        [HttpGet]
        public IEnumerable<Convenio> Get()
        {
            return _convenio;
        }

        [HttpGet("{id}")]
        public IEnumerable<Convenio> GetById(int id)
        {
            return _convenio.Where(convenio => convenio.ConvenioId == id);
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
