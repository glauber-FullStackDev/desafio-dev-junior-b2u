import http from "../../http";
import { ICarro } from "../../interfaces/ICarro";
import { DeleteIcon, BtnExcluir } from "./styles";

type Props = {
    lista: ICarro[];
    item: ICarro;
    setEstado: React.Dispatch<React.SetStateAction<ICarro[]>>
}

const BotaoExcluir = ({  lista, item, setEstado }: Props) => {

    function excluir(itemASerExcluido: ICarro) {
        http.delete(`carros/delete/${itemASerExcluido._id}`)
            .then(() => {
                const listaAtual = lista.filter(itemDaLista => itemDaLista._id !== itemASerExcluido._id);
                setEstado(listaAtual);
                alert('Anuncio Excluido');
            }).catch(error => {
                console.log((error as Error).message);
            })
    }


    return(
        <BtnExcluir
            onClick={() => excluir(item)}
        >
            <DeleteIcon/> Excluir
        </BtnExcluir>
    );
}

export default BotaoExcluir