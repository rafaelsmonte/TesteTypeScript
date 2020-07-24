import mongoose from "mongoose";
import Validacoes from '../services/Validacoes'
const Schema = mongoose.Schema;
const schema = new Schema({

  productId: {
    type: Number,
    required: [true, 'ID do produto é obrigatorio'],
  },
  name: {
    type: String,
    required: [true, 'Nome é obrigatorio'],
    trim: true,
    lowercase: true,

  },
  email: {
    type: String,
    required: [true, 'Email do produto é obrigatorio'],
    trim: true,
    lowercase: true,
    validate: [Validacoes.isEmail, 'Email inválido'],

  },
  CPF: {
    type: Number,
    required: [true, 'CPF é obrigatorio'],

  },
  birthDate: {
    type: Date,
    required: [true, 'Data de nascimento é obrigatorio'],

  },
  phone: {
    type: Number,
    required: [true, 'Telefone é obrigatorio'],


  },
});

module.exports = mongoose.model("final", schema);