
using ProAtividade.API.Models;
using ProAtividade.Data.Context;

namespace ProAtividade.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        private readonly DataContext _context;

        public AtividadeController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Atividade> Get(){
            
            return _context.Atividades;
        }

        [HttpGet("{id}")]
        public Atividade Get(int id){
            
            return _context.Atividades.FirstOrDefault(ati => ati.Id == id ) ;
        }

        [HttpPost]
        public IEnumerable<Atividade> Post( Atividade Atividades){

            _context.Atividades.Add(Atividades);    
            if (_context.SaveChanges() > 0)
            
                return _context.Atividades;
            else
                throw new Exception("deu errado");
        }
        

        [HttpPut("{id}")]
        public Atividade Put( int id, Atividade atividade){
            if (atividade.Id != id) throw new Exception("voce esta tentando atualizar atividade errada");

                _context.Update(atividade);
                if (_context.SaveChanges() > 0)
            {
                return _context.Atividades.FirstOrDefault(ativ =>ativ.Id == id);
            } else
                return new Atividade();
            

        }
        

        [HttpDelete("{id}")]
        public bool Delete(int id){
            var atividade = _context.Atividades.FirstOrDefault(ativ =>ativ.Id == id);
            if (atividade == null)
                throw new Exception("voce esta deletando errado");
            
            _context.Remove(atividade);

            return _context.SaveChanges() > 0;
        }
        
        
    }
}