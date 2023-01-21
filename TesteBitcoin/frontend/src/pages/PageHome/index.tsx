import {useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api  from "../../service/api";
import { Container } from "./style";
import {AiTwotoneEdit} from 'react-icons/ai'
import { CartContext } from "../../Context/cart";

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

export function PageHome(){
    const [auto, setAuto] = useState<autoProps[]>()
    const  {login, authenticated}:any = useContext(CartContext)
    
    useEffect(() => {
        (async ()=>{
            const response = await api.get('/products');
            //console.log(response.data)
            setAuto(response.data)
            console.log(auto)
        })();
    },[])

    
    return(
        <Container>
            <h2>Veiculos</h2>
            <div  className="list-products">
                {true && (
                    auto?.map((props, index) => (
                        <Link className="link-cart" to={`/ViewProduct/${props.id}`}>
                        <div className="cart-product">
                            <img src={props.image} alt="imagem do automovel" />
                            <div className="description-product">
                                <p>{props.name}</p>
                                <p>R$ {props.price}</p>
                            </div>
                                <span>{props.description}</span>
                                {authenticated && (
                                    <Link to={`/EditAuto/${props.id}`}><AiTwotoneEdit  className="icon-edit"/></Link>
                                )}
                        </div>
                        </Link>
                    ))
                )}
            </div>       
        </Container>
    )
}
