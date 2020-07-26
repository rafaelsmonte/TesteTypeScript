import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = new Schema({

  productId: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  CPF: {
    type: String,
  },
  birthDate: {
    type: String,
  },
  phone: {
    type: String,
  },
});

export default mongoose.model("partial", schema);