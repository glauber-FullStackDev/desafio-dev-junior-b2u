import { useState, useEffect } from "react";
import Card from "../../components/Card";
import http from "../../http";
import { ICarro } from "../../interfaces/ICarro";
import { Container } from "./styles";



const ListaCarros = () => {

    const [carros, setCarros] = useState<ICarro[]>([]);

    useEffect(() => {
      http
        .get('carros')
        .then(res => {
            setCarros(res.data)
        })
        .catch(error => {
            console.log(error.message)
        })
    }, []);
    
    
    return(
        <Container>
            {carros.map((carro, index) => {
                return(
                    <Card
                     key={index}
                     lista={carros}
                     item={carro}
                     setEstado={setCarros}          
                    />
                )
            } )}
        </Container>
    )

}

export default ListaCarros;