import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../service/api";
import { Container } from "../PageRegistrationAuto/style";


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


export function EditAuto(){
    const [auto, setAuto] = useState<autoProps[]>()

    const [name, setName] = useState<string>()
    const [price, setPrice] = useState<number>()
    const [brand, setBrand] = useState<string>()
    const [year_manufacture, setYear_manufacture] = useState<number>()
    const [description, setDescription] = useState<string>()
    const [image, setImage] = useState<string>()
    const [owner, setOwner] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [number_owner, setNumber_owner] = useState<number>()
    const {id} = useParams();
    const navegate = useNavigate()

    function handleUpdateAuto(e:any) {

        e.preventDefault()
        console.log(name)
      api.put(`/products/${id}`,{
                id: id,
                name: name,
                price: price,
                brand:brand,
                year_manufacture: year_manufacture,
                description:description,
                image:image,
                owner:owner,
                email:email,
                number_owner:number_owner,
            }).then(response=>{
                console.log(response.data)
            }).catch(erro=>console.log(erro))
             navegate('/')
    }


    return(
        <Container>
            <h1>Modifique ao menos 2 caracteristica</h1>
            <form>
                <label>Nome Veiculo</label>
                <input 
                    type="text"
                    placeholder="Digite o nome do seu veiculo..." 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <label>Preço</label>
                <input 
                    type="number" 
                    placeholder="Digite o preço..."
                    value={price}
                    onChange={(e)=>setPrice(e.target.valueAsNumber)}    
                />
                <label>Marca</label>
                <input 
                    type="text"
                    placeholder="Digite o nome da marca..." 
                    value={brand}
                    onChange={(e)=>setBrand(e.target.value)}
                />
                <label>Ano Fabricação</label>
                <input 
                    type="number"
                    placeholder="Digite o ano de frabicação"
                    value={year_manufacture}
                    onChange={(e)=>setYear_manufacture(e.target.valueAsNumber)} 
                />                
                <label>Descrição</label>
                <input 
                    type="text" 
                    placeholder="Digite alguma descrição"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                />
                <label>Imagem</label>
                <input 
                    type="text" 
                    placeholder="Cole aqui o endereço de alguma imagem..."
                    value={image}
                    onChange={(e)=>setImage(e.target.value)}
                />
                <label>Seu Nome</label>
                <input 
                    type="text" 
                    placeholder="Digite seu nome..."
                    value={owner}
                    onChange={(e)=>setOwner(e.target.value)}
                />
                <label>Email</label>
                <input 
                    type="text" 
                    placeholder="Digite seu Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <label>Seu numero</label>
                <input 
                    type="number" 
                    placeholder="Digite seu numero..."
                    value={number_owner}
                    onChange={(e)=>setNumber_owner(e.target.valueAsNumber)}
                />
                <button onClick={handleUpdateAuto}>Modificar</button>
            </form>
        </Container>
    )
}