import { model, Model, Schema, Types } from "mongoose";
import { ICarros } from "../interfaces/ICarros";
import { IProprietario } from "../interfaces/IPropietario";

type CarroModelType = Model<ICarros>;

const carroSchema = new Schema<ICarros, CarroModelType>({

    nome: {
        type: String,
        required: [true, 'Carro deve ter um nome']
    },

    marca: {
        type: String,
        required: [true, 'Carro deve ter uma marca']
    },

    ano: {
        type: Number,
        required: [true, 'Carro deve ter um ano de fabricação']
    },

    descricao: {
        type: String,
        required: [true, 'Carro deve ter uma descrição']
    },

    proprietario: new Schema<IProprietario>({

        id: {
            type: Types.ObjectId
        },

        nome: {
            type: String,
        },

        email: {
            type: String,
        },

        telefone: {
            type: String,
        }, 

    })

});

export const Carros = model<ICarros, CarroModelType>('Carros', carroSchema)