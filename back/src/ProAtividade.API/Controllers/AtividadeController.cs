using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ProAtividade.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {   
        [HttpGet]
        public string get(){
            return "meu primeiro metodo get";
        }

        [HttpPost]
        public string Post(){
            return "meu primeiro metodo Post";
        }
        

        [HttpPut]
        public string Put(){
            return "meu primeiro metodo Put";
        }
        

        [HttpDelete]
        public string Delete(){
            return "meu primeiro metodo Delete";
        }
        
        
    }
}