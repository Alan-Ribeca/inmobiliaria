const express = require("express");
const router = express.Router();
const propiedadesController = require("../controllers/propiedadesController");
//defino las rutas
module.exports = function () {
  //PROPIEDADES
  //agregar nuevas propiedades
  router.post(
    "/propiedades",
    propiedadesController.subirArchivo,
    propiedadesController.agregarPropiedades
  );
  return router;
};
