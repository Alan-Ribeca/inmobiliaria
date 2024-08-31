const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propiedadesSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  precio: {
    propiedad: {
      type: Number,
      required: true,
    },
    expensas: {
      type: Number,
    },
  },
  informacion: {
    superficie: {
      type: Number,
      required: true,
    },
    habitaciones: {
      type: Number,
      required: true,
    },
    banos: {
      type: Number,
      required: true,
    },
    coquera: {
      type: String,
    },
    anoPropiedad: {
      type: Number,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    ubicacion: {
      type: String,
      required: true,
    },
  },
  imagenes: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model("Propiedades", propiedadesSchema);
