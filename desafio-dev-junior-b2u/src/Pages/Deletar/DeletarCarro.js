import './styles.css'
import Header from '../../Componentes/Header/Header'
import api from '../../services/api'
import { useState } from 'react'
function Deletar(){
const [id,setId] = useState()
async function handleSubmit(e){
    e.preventDefault();
    try {
        const response = await api.delete(`/deletarCarro/${id}`,{
            id
    })
        
        if(response > 204){
            return;
        }

        if(id < 0){
            alert('O identificador tem que ser maior que 0')
            return
        }
        console.log(response.data)
        alert('Carro deletado com sucesso')
    } catch (error) {
        console.log(error.response)
    }
}
    return(
        <>
        <Header/>
        <form onSubmit={handleSubmit} className='delete-area'>
        <h1>Deletar carro cadastrado</h1>
        <div>
        <input value={id} onChange={(e) => setId(e.target.value)} type="number" placeholder='Insira o identicador para deletar o carro'></input>
        <div className='content-button'>
        <button className='btn-confirmar'>Confirmar</button>
        </div>
      
        </div>
        </form>
        
        </>
       
    )
}
export default Deletar