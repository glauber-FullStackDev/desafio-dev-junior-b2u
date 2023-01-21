import { Container } from "./style";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/cart";
import { Link, useNavigate } from "react-router-dom";

export function Login(){

    const  {login, authenticated}:any = useContext(CartContext)

    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const navigate = useNavigate();

    function handleSubmit(e:any){
        e.preventDefault()
        if(!authenticated){
            login(email, password)
            navigate('/')
        }else{
            alert('Usuario já logado.')
        }
    }

    return(
        <Container>
            <h1>Tela de Login</h1>
            <form>
                <input
                    type="text" 
                    placeholder="example@gmail.com" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                 />
                <input 
                    type="text" 
                    placeholder="Digite sua senha aqui..."
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />

                <div className="buttons-area">
                <button onClick={handleSubmit}>Confirmar</button>
                 <Link className="link" to={`/PageRegistrationUser`}>
                    <button>Fazer Cadastro</button>
                </Link>
                </div>
            </form>
            
        </Container>
    )
}