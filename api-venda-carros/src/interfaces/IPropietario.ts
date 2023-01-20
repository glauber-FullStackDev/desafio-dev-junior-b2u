import { Document, Types } from "mongoose";

export interface IProprietario extends Document {
    _id: Types.ObjectId
    nome: string;
    email: string;
    telefone: string;
}