import { Link } from 'react-router-dom'
import './styles.css'
import api from '../../services/api'
import { useState } from 'react';
import { setItem } from '../../utils'
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')


async function handleSubmit(e){
    e.preventDefault();

    try {
        if(!email || !senha){
            alert('preencha todos os campos')
            return;
        }
        const response = await api.post('/login',{
            email,
            senha
        })
        const {token} = response.data
        setItem('token',token);
        navigate('/home')
        console.log(response.data)
        alert('Login realizado com sucesso (=:')
        setEmail(' ')
        setSenha(' ')
    } catch (error) {
        console.log(error.response.data)
    }
    
}
    return(
        <form onSubmit={handleSubmit} className='form-area'>
          <h1>Login</h1>
          <strong>Boas vindas!</strong>
          <p>Use seu e-mail e senha para acessar a conta</p>

          <div className='inputs'>
            <label>E-mail</label>
            <input  onChange={(e) => setEmail(e.target.value)} placeholder='exemplo@email.com'/>
          </div>
          <div className='inputs'> 
            <label>Senha</label>
            <input  onChange={(e) => setSenha(e.target.value)} type="password" placeholder='Insira sua senha'/>
          </div>
          <button> 
            Fazer Login
          </button>
          <div className='links'> 
          <span>Não possui conta?</span>
          <Link to="/cadastrar">Cadastrar</Link>
          </div>
        
        </form>
    )
}
export default Login