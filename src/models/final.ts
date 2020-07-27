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
    validate: [Validacoes.isCPF, 'CPF inválido'],

  },
  birthDate: {
    type: Date,
    required: [true, 'Data de nascimento é obrigatorio'],
    validate: [Validacoes.idadeEntre18e65, 'Idade deve ser entre 18 e 65 anos'], 
  },
  phone: {
    type: Number,
    required: [true, 'Telefone é obrigatorio'],
    validate: [Validacoes.isPhone, 'Telefone em formato incorreto'], 
  },
});

export default mongoose.model("final", schema);