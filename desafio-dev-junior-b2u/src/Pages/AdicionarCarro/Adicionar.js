import './styles.css'
import Header from '../../Componentes/Header/Header'
import api from '../../services/api';
import { useState } from 'react';


function AdiconarCarro(){
const [marca , setMarca] = useState('')
const [descricao,setDescricao] = useState('')
const [data_fabricacao,setData_fabricaco] = useState('')
const [nome,setNome] = useState('')
async function handleSubmit(e){
    e.preventDefault();
    
    try {
        if(!marca || !descricao || !data_fabricacao){
            alert('Preencha todos os campos')
        }
      const response = await api.post('/salvarCarro',{
        nome,
        marca,
        descricao,
        data_fabricacao
      }) 
      console.log(response.data)
      alert('Carro cadastrado com sucesso (=;')
      setMarca(' ')
      setNome(' ')
      setDescricao(' ')
      setData_fabricaco(' ')
    } catch (error) {
        console.log(error.response.data)
    }
}
    return(
        <>
        <Header/>
        <form onSubmit={handleSubmit} className='content-area'>
            <h1>Adicionar Carro</h1>
            <div  className='inputs-nome'>
                <label>Nome</label>
                <input className='inputs' value={nome} onChange={(e) =>setNome(e.target.value)} type="text"/>
            </div>
            <div className='inputs-marca'>
                <label>Marca</label>
                <input value={marca} onChange={(e) =>setMarca(e.target.value)} type="text"/>
            </div>
            <div className='inputs-desc'>
                <label>Descrição</label>
                <input value={descricao} onChange={(e) =>setDescricao(e.target.value)} type="text"/>
            </div>
            <div className='inputs-data'>
                <label>Data/Fab</label>
                <input value={data_fabricacao} className='inputs' onChange={(e) => setData_fabricaco(e.target.value)} type="text"/>
            </div>
            <div className='btn'> 
            <button>Confirmar</button>
            </div>
           
        </form>
        </>
      
        
    )
}
export default AdiconarCarro