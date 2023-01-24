import { IProprietario } from "./IProprietario";

export interface ICarro {
    _id: string;
    nome: string;
    marca: string;
    ano: number,
    descricao: string;
    proprietario: IProprietario;


}