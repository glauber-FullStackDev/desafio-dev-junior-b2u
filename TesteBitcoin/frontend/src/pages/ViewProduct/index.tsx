import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../Context/cart";
import api from "../../service/api";
import { Container } from "./style";
import {AiOutlineMail, AiFillPhone} from 'react-icons/ai'

interface autoProps{
    id:number;
    name: string;
    price: number;
    brand: string;
    year_manufacture: number;
    description: string;
    image: string;
    owner: string;
    email: string;
    number_owner: string;
}


export function ViewProduct(){
    const  {authenticated}:any = useContext(CartContext)
    const [auto, setAuto] = useState<autoProps>()
    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        (async ()=>{
            const response = await api.get(`/products/${id}`);
            setAuto(response.data)
        })();
    },[])

    function handleRemove(){
        api.delete(`/products/${id}`)
        navigate('/')
    }


    return(
        <Container>
            <h1>{auto?.name}</h1>
            <h2>{auto?.description} - {auto?.brand} - {auto?.year_manufacture}</h2>
            <div className="total-product">
                <img src={auto?.image} alt="imagem do produto" />
                <div className="description">
                    <h3>R$ {auto?.price}</h3>
                    <div className="sub-description">
                        <p>{auto?.owner}</p>
                        <p>Entrar em Contato:</p>
                        <p><AiOutlineMail/> {auto?.email}</p>
                        <p><AiFillPhone/> {auto?.number_owner}</p>
                    </div>
                    {authenticated && (
                        <button onClick={handleRemove}>Excluir Veiculo</button>
                    )}
                </div>
            </div>
        </Container>
    )
}