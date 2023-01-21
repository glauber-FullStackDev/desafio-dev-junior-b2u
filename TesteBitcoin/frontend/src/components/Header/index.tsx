import { Container } from "./style";
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { CartContext } from "../../Context/cart";
import {AiOutlineLogout} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";


export function Header(){

    const  {authenticated, Logout}:any = useContext(CartContext)
    const navigate = useNavigate()
    
    function handleLogout(){
        Logout()
        navigate('/')
    }

    return(
        <Container>
            <h1>Test<span>Sell</span></h1>
            
                {!authenticated && (
                <ul>
                <li><Link className="link" to={`/`}>Home</Link></li>
                <li><Link className="link" to={`/Login`}>Login</Link></li>
                </ul>
                )}
                {authenticated && (
                <ul>
                <li><Link className="link" to={`/`}>Home</Link></li>
                <li><Link className="link" to={`/PageRegistrationAuto`}>Cadastrar Veiculo</Link></li>
                <li><button onClick={handleLogout}><AiOutlineLogout className="icon-logout"/></button></li>
                </ul>
                
                )}
 
        </Container>
    )
}