import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/cart";
import { Container } from "../Login/style";

export function PageRegistrationUser(){

    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [password2, setPassword2] = useState<string>()
    const  {AddUser}:any = useContext(CartContext)
    const navigate = useNavigate();

    function handleUser(e:any){
        e.preventDefault()
        if(password == password2 && password!= null && password2!= null){
            AddUser(email, password)
            setEmail('')
            setPassword('')
            navigate('/Login')
        }else{
            alert('Senhas Diferentes')
        }
    }

    return(
        <Container>
            <h1>Tela de Cadastro</h1>
            <form>
                <input 
                    type="text" 
                    placeholder="example@gmail.com" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                <input 
                    type="text" 
                    placeholder="Digite uma senha aqui..."
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                <input 
                    type="text" 
                    placeholder="Digite a senha novamente..."
                    value={password2}
                    onChange={(e)=>setPassword2(e.target.value)}
                    />
                <div className="buttons-area">
                <button onClick={handleUser}>Confirmar</button>
                
                </div>
            </form>
        </Container>
    )
}