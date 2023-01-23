import { ICarro } from "../../interfaces/ICarro";
import BotaoEditar from "../BotaoEditar";
import BotaoExcluir from "../BotaoExcluir";
import { Cartao, Caixa, CarIcon, MarcaIcon, NotaIcon, AnoIcon } from "./styles";

type Props = {
    lista: ICarro[];
    item: ICarro;
    setEstado: React.Dispatch<React.SetStateAction<ICarro[]>>
}



const Card = ({ lista, item, setEstado }: Props) => {
    return (
       
        <Cartao>   
            <Caixa>
                <CarIcon/>
                <p>{ item.nome }</p>
            </Caixa>
            <Caixa>
                <MarcaIcon/>
                <p>{ item.marca }</p>
            </Caixa>
            <Caixa>
                <AnoIcon/>
                <p>{ item.ano }</p>
            </Caixa>
            <Caixa>
                <NotaIcon/>
                <p>{ item.descricao }</p>
            </Caixa>
            <Caixa>
                <BotaoEditar/>
                <p>Editar anúncio</p>
            </Caixa>
            <Caixa>
                <BotaoExcluir
                    lista={lista}
                    item={item}
                    setEstado={setEstado}           
                />
                <p>Excluir anúncio</p>
            </Caixa>
            
        </Cartao>
        
        
    )
}

export default Card;