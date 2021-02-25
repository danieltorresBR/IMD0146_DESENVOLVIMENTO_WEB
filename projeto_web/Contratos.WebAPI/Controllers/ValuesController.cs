using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Contratos.WebAPI.Model;

namespace Contratos.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<DocumentoContratualModelo>> Get()
        {
            return new DocumentoContratualModelo[] {
                new DocumentoContratualModelo() {
                    Id = 1,
                    DataInicioVigencia = DateTime.Now.ToString("dd/MM/yyyy"),
                    DataFimVigencia = DateTime.Now.AddDays(365).ToString("dd/MM/yyyy"),
                    ProcessoTCE = "2021-0001-0002",
                    LinkRedmine = "https://redmine.tce.rn.gov.br/",
                    ObjetoAcordo = "Aqui é o objetivo que será objetivado para se ter um objeto"
                },
                new DocumentoContratualModelo() {
                    Id = 2,
                    DataInicioVigencia = DateTime.Now.ToString("dd/MM/yyyy"),
                    DataFimVigencia = DateTime.Now.AddDays(183).ToString("dd/MM/yyyy"),
                    ProcessoTCE = "2021-0001-0002",
                    LinkRedmine = "https://redmine.tce.rn.gov.br/",
                    ObjetoAcordo = "Aqui é o objetivo que será objetivado para se ter um objeto"
                }
            };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<DocumentoContratualModelo> Get(int id)
        {
            return new DocumentoContratualModelo[] {
                new DocumentoContratualModelo() {
                    Id = 1,
                    DataInicioVigencia = DateTime.Now.ToString("dd/MM/yyyy"),
                    DataFimVigencia = DateTime.Now.AddDays(365).ToString("dd/MM/yyyy"),
                    ProcessoTCE = "2021-0001-0002",
                    LinkRedmine = "https://redmine.tce.rn.gov.br/",
                    ObjetoAcordo = "Aqui é o objetivo que será objetivado para se ter um objeto"
                },
                new DocumentoContratualModelo() {
                    Id = 2,
                    DataInicioVigencia = DateTime.Now.ToString("dd/MM/yyyy"),
                    DataFimVigencia = DateTime.Now.AddDays(183).ToString("dd/MM/yyyy"),
                    ProcessoTCE = "2021-0001-0002",
                    LinkRedmine = "https://redmine.tce.rn.gov.br/",
                    ObjetoAcordo = "Aqui é o objetivo que será objetivado para se ter um objeto"
                }
            }.FirstOrDefault(x => x.Id == id);
        }
    }
}
