const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
    trim: true,
    match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
  },
  usuario: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
  },
});

module.exports = mongoose.model("Usuarios", UsuarioSchema);
