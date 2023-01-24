
import { InfoIcon, LinkInfo } from "./styles";

interface Props {
    idCarro: string
}

const BotaoInfo = ({ idCarro }: Props) => {
    return(
        <LinkInfo to={`/carros/${idCarro}`}>
            <InfoIcon/> Mais Informações
        </LinkInfo>
    )
}


export default BotaoInfo;