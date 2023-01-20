import { useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'

function Modal({
    open,
    handleClose
}){
const [marca,setMarca] = useState('')
const [nome,setNome] = useState('')
const [data_fabricacao, setData] = useState('')
const [descricao,setDescricao] = useState('')
const [id,setId] = useState('')

async function handleSubmit(e){
    e.preventDefault();


    try {
        if(id < 0){
            alert('O identificador tem que ser maior que 0')
            setData(' ')
            setDescricao(' ')
            setNome(' ')
            setMarca(' ')
            setId(' ')
            return;

        }
        const response =  await api.put(`/atualizarCarro/${id}`,{
            id,
            nome,
            marca,
            descricao,
            data_fabricacao
            
        })
        if(response.status > 204){
            return
        }
        console.log(response.data)
       
        alert('atualizado com  sucesso')
        setData(' ')
        setDescricao(' ')
        setNome(' ')
        setMarca(' ')
        setId(' ')
    } catch (error) {
        console.log(error.response)
    }
    
}
    return(
      <> 
      {open && 
      <div className='backdrop'> 
        <div className='modal modal-add'> 
            <h2>Editar Carro</h2>
        
        <form onSubmit={handleSubmit} className='form-edit'>
        <input 
            type="text" 
            placeholder='Nome'
             value={nome} 
             onChange={(e) => setNome(e.target.value)}
             /> 
            <input 
            type="text" 
            placeholder='Marca'
             value={marca} 
             onChange={(e) => setMarca(e.target.value)}
             />
             <input 
            type="text" 
            placeholder='Data/fab'
             value={data_fabricacao} 
             onChange={(e) => setData(e.target.value)}
             />
             <input 
            type="text" 
            placeholder='Descricao'
             value={descricao} 
             onChange={(e) => setDescricao(e.target.value)}
             />

            <input 
            type="number" 
            placeholder='Passe o identificador'
             value={id} 
             onChange={(e) => setId(e.target.value)}
             />

            <div className='btn-buttons'> 
            <button className='color-green'>Salvar</button>
            <button className='color-redd' onClick={handleClose}>Cancelar</button>
            </div>
        </form>
        
     
        </div>
      </div>
      
      
      }
      
      </>
    )
}
export default Modal