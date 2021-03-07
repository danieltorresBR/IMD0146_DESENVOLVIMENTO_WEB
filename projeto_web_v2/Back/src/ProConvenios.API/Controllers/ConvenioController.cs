using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ProConvenios.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ConvenioController : ControllerBase
    {
        public ConvenioController()
        {
        }

        [HttpGet]
        public string Get()
        {
            return "value";
        }
    }
}
