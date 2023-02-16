import React, { useEffect, useState } from 'react';


const atividadeInicial = {
    id: 0,
    titulo: '',
    descricao: '',
    prioridade: 0,

};

export default function AtividadeFom(props) {
    const [atividade, setAtivdade] = useState(atividadeAtual());


    useEffect(()=> {
        if (props.AtivSelecionada.id !== 0) 
            setAtivdade(props.AtivSelecionada);
    },[props.AtivSelecionada]);

    const InputTextHandLer =  (e) =>{
        const{name, value} = e.target;

        setAtivdade({...atividade, [name]:value});
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (props.AtivSelecionada.id !== 0) props.atualizarAtividade(atividade);
        else props.addAtividades(atividade);

        
            setAtivdade(atividadeInicial);
        
    };

    const handleCancelar = (e) => {
        e.preventDefault();
        props.cancelarAtividade();
        setAtivdade(atividadeInicial);
    };

    function atividadeAtual() {
        if (props.AtivSelecionada.id !== 0) {
            return props.AtivSelecionada;
            
        }else {
            return atividadeInicial;
        }
        
    }

    return (
        <>
    <form className= "row g-3" onSubmit={handleSubmit}>

        <div className="col-md-6">
          <label className='form-label'>titulo</label>
          <input                  
                name='titulo'
                value={atividade.titulo}
                onChange={InputTextHandLer}
                id='titulo' 
                type="text" 
                className="form-control"
            />
        </div>
        <div className="col-md-6">
          <label className='form-label'>Prioridade</label>
          <select
                name='prioridade'
                value={atividade.prioridade}
                onChange={InputTextHandLer}
                id='prioridade'
                className="form-select"
            >
            <option value='NaoDefinido'>Não definido </option>
            <option value='Baixa'>baixa</option>
            <option value='Normal'>normal</option>
            <option value='Alta'>Alta</option>
          </select>
        </div>
        <div className="col-md-12">
          <label className='form-label'>Descricao</label>
          <textarea  
                name='descricao'
                value={atividade.descricao}
                onChange={InputTextHandLer}
                id='descricao' 
                type="text"
                className="form-control" 
            />
        <hr/>
        </div>
        <div className='col-12'>
            {
                atividade.id === 0 ? (
                <button 
                        className='btn btn-outline-secondary' 
                        type='submit'
                > 
                        <i className=' fas fa-plus me-2'></i>
                            atividade
                        </button>
                ):(
                    <>
                        <button 
                            className='btn btn-outline-success me-2' 
                            type='submit' 
                        > 
                            <i className=' fas fa-plus me-2'></i>
                            salvar
                        </button>
                        <button 
                            className='btn btn-outline-warning' 
                            onClick={handleCancelar}
                        > 
                            <i className=' fas fa-plus me-2'></i>
                            cancelar
                        </button>
                    </>
            )}
         
        </div>
        
      </form>
      </>
  );
}

