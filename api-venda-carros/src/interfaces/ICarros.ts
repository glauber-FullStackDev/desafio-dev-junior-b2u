import { Document } from "mongoose";
import { IProprietario } from "./IPropietario";

export interface ICarros extends Document {
    nome: string;
    marca: string;
    ano: number;
    descricao: string;
    proprietario: IProprietario;

}