
import { InfoIcon, LinkInfo } from "./styles";

interface Props {
    idCarro: string
}

const BotaoInfo = ({ idCarro }: Props) => {
    return(
        <LinkInfo to={`/carros/editar/${idCarro}`}>
            <InfoIcon/> Editar
        </LinkInfo>
    )
}


export default BotaoInfo;