import { model, Model, Schema } from "mongoose"
import { IProprietario } from "../interfaces/IPropietario"

type ProprietarioModelType = Model<IProprietario>;

const proprietarioSchema = new Schema<IProprietario, ProprietarioModelType>({
    
    nome: {
        type: String,
        required: [true, 'proprietário deve ter um nome']
    },

    email: {
        type: String,
        required: [true, 'proprietário deve ter um e-mail']
    },

    telefone: {
        type: String,
        required: [true, 'proprietário deve ter um telefone']
    },
});

export const Proprietarios = model<IProprietario, ProprietarioModelType>('Proprietarios', proprietarioSchema);

