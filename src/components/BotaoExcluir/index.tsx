import http from "../../http";
import { ICarro } from "../../interfaces/ICarro";
import { DeleteIcon } from "./styles";

type Props = {
    lista: ICarro[];
    item: ICarro;
    setEstado: React.Dispatch<React.SetStateAction<ICarro[]>>
}


const BotaoExcluir = ({  lista, item, setEstado }: Props) => {

    function excluir(itemASerExcluido: ICarro) {
        http.delete(`carros/delete/${(itemASerExcluido.id)}.`)
            .then(() => {
                const listaAtual = lista.filter(itemDaLista => itemDaLista.id !== itemASerExcluido.id);
                setEstado(listaAtual);
                alert('Anuncio Excluido');
            }).catch(error => {
                console.log((error as Error).message);
            })
    }


    return(
        <button
            onClick={() => excluir(item)}
        >
            <DeleteIcon/>
        </button>
    );
}

export default BotaoExcluir