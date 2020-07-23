import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = new Schema({

  productId: {
    type: Number,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  CPF: {
    type: Number,
  },
  birthDate: {
    type: Date,
  },
  phone: {
    type: Number,
  },
});

module.exports = mongoose.model("partial", schema);