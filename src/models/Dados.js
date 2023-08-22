const mongoose = require("mongoose");

const dadosSchema = mongoose.Schema({
  cpf: {
    type: String,
    required: [true, "Digite um cpf"],
  },
  nome: {
    type: String,
  },
  nascimento: {
    type: String,
  },
  nomeMae: {
    type: String,
  },
  rua: {
    type: String,
  },
  numeroCasa: {
    type: Number,
  },
  complemento: {
    type: String,
  },
  bairro: {
    type: String,
  },
  cep: {
    type: Number,
  },
  cidade: {
    type: String,
  },
  estado: {
    type: String,
  },
  uf: {
    type: String,
  },
});
const Dados = mongoose.model("Dados", dadosSchema);
module.exports = Dados;