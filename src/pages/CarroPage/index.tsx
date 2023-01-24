import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Titulo from "../../components/Titulo";
import http from "../../http";
import { ICarro } from "../../interfaces/ICarro";
import { Container, Info, Registro } from "./styles";

const CarroPage = () => {

    const [carro, setCarro] = useState<ICarro>();

    const parametro = useParams();

    useEffect(() => {

        if(parametro.id) {            
            http
                .get<ICarro>(`carros/${parametro.id}`)
                .then(res => setCarro(res.data))
                .catch(error => console.log(error.message))     
        }
        

      
    }, [parametro])
    
    
    return(
        <Container>
            <Registro>
                <Titulo texto='Informações do Carro'/>
                <Info>
                    <li>{`Carro: ${carro?.nome}`}</li>
                    <li>{`Marca: ${carro?.marca}`}</li>
                    <li>{`Ano: ${carro?.ano}`}</li>
                    <li>{`DescriÇão: ${carro?.descricao}`}</li>
                    <li>{`Proprietário: ${carro?.proprietario?.nome}`}</li>
                    <li>{`Proprietário: ${carro?.proprietario?.email}`}</li>
                    <li>{`Proprietário: ${carro?.proprietario?.telefone}`}</li>
                </Info>
           </Registro>
        </Container>
    )

}

export default CarroPage;