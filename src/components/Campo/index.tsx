import { CampoTexto } from "./styles";



type Props = {
    estado: string;
    setEstado: React.Dispatch<React.SetStateAction<string>>;
    rotulo: string;
    tipo: React.HTMLInputTypeAttribute
}

const Campo: React.FC<Props> = ({ estado, setEstado, rotulo, tipo } : Props) => {
    return (
        <CampoTexto
         value={estado}
         placeholder={rotulo}
         type={tipo}
         onChange={evento => setEstado(evento.target.value)}  
         required
        />
    );
}


export default Campo;





