
import './styles.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import api from '../../../services/api';
function Cadastrar(){

const [nome,SetNome] = useState('')
const [email,SetEmail] = useState('')
const [senha,SetSenha] = useState('') 
const [telefone,setTelefone] = useState('')
const [carro_id,setCarro] = useState('')

 async function handleSubmit(e){
    e.preventDefault();
    
    try {
        if(!email || !senha || !nome || !telefone || !carro_id){
            alert('preencha todos os campos');
            return
        }
        const response = await api.post('/salvarDono',{
            nome,
            email,
            senha,
            telefone,
            carro_id
        })
        console.log(response.data)
        alert('Cadastro realizado com sucesso (=:')
        setCarro(' ')
        setTelefone(' ')
        SetSenha(' ')
        SetEmail(' ')
        SetNome(' ')
    } catch (error) {
        console.log(error.response)
    }
}
    return(
        <form onSubmit={handleSubmit} className='form-area'>
          <h1>Login</h1>
          <strong>Cadastre-se!</strong>
          <p></p>
          <div className='inputs'>
            <label>Nome</label>
            <input onChange={(e) => SetNome(e.target.value)} value={nome} placeholder='Digite seu nome completo' type="text"/>
          </div>
          <div className='inputs'>
            <label>E-mail</label>
            <input onChange={(e) => SetEmail(e.target.value)} value={email} type="text" placeholder='exemplo@email.com'/>
          </div>
          <div className='inputs'>
            <label>Telefone</label>
            <input onChange={(e) => setTelefone(e.target.value)} value={telefone} type="text" placeholder='9 digítos'/>
          </div>

          <div className='inputs'>
            <label>Identificador</label>
            <input onChange={(e) => setCarro(e.target.value)} value={carro_id} type="number" placeholder='Insira o identificador do carro'/>
          </div>
          <div className='inputs'> 
            <label>Senha</label>
            <input onChange={(e) => SetSenha(e.target.value)} value={senha} type="password" placeholder='Insira sua senha'/>
          </div>
          <button> 
            Criar Conta
          </button>

          <div className='links'> 
          <span> Possui conta?</span>
          <Link to="/">Fazer Login</Link>
          </div>
        </form>
    )
}
export default Cadastrar