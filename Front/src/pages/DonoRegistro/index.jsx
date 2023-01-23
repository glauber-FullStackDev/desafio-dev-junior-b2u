import { useState } from "react"

import '../styles/global-pages.css'
import './styles.css'

const url = import.meta.env.VITE_URL

export function DonoRegistro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    function submit(e) {
        e.preventDefault();

        if(nome === '' || email === '' || telefone === '') {
            alert("Preencha os campos corretamente");
            return;
        }

        axios.post(`${url}/donos`, {
            nome: nome,
            email: email,
            telefone: telefone
        })
        .then(response => {
            console.log(response.data)

            setNome('')
            setEmail('')
            setTelefone('')
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="container">
            <h2 className="title">Registre-se como um Dono</h2>
            <div className="form-container">
                <form onSubmit={submit} >
                    <label>
                        <p>nome:</p>
                        <input 
                            type="text"
                            placeholder="Digite seu nome"
                            onChange={(e) => setNome(e.target.value)}
                            value={nome}  
                        />
                    </label>
                    <label>
                        <p>email:</p>
                        <input 
                            type="text"
                            placeholder="Digite seu email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} 
                        />   
                    </label>
                    <label>
                        <p>telefone:</p>
                        <input 
                            type="text"
                            placeholder="Digite seu telefone"
                            onChange={(e) => setTelefone(e.target.value)}
                            value={telefone}  
                        />
                    </label>
    
                    <button type="submit">Registrar</button>
                </form>
            </div>
        </div>
    )
}