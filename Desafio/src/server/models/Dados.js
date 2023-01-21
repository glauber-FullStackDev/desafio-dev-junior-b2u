import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const anuncioSchema = new Schema({
  carro: {
    type: String,
  },

  marca: {
    type: String,
  },

  fabricacao: {
    type: String,
  },

  descricao: {
    type: String
  },

  dono: {
    type: String,
  },

  email: {
    type: String
  },

  telefone: {
    type: String,
  }
});

export default mongoose.model('Anuncio', anuncioSchema);
