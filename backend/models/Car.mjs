import mongoose from 'mongoose';

const Car = mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    marca:{
        type: String,
        required: true
    },
    ano:{
        type: Number,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    donoNome: { type: String},
    donoEmail: { type: String},
    donoTelefone: { type: Number},

});

export default mongoose.model('Cars', Car);