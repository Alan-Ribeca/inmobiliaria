const express = require("express");
const router = express.Router();
const propiedadesController = require("../controllers/propiedadesController");
const usuarioController = require("../controllers/usuariosController");
//middleware para proteger las rutas
const auth = require("../middleware/auth");

//defino las rutas
module.exports = function () {
  //PROPIEDADES
  //agregar nuevas propiedades
  router.post(
    "/propiedades",
    propiedadesController.subirArchivo,
    propiedadesController.agregarPropiedades
  );

  //mostrar todas las propiedades
  router.get("/propiedades", propiedadesController.mostrarPropiedades);

  //mostrar una propiedad por id
  router.get(
    "/propiedades/:idPropiedad",
    propiedadesController.mostrarPropiedad
  );

  //actualizar una propiedad
  router.put(
    "/propiedades/:idPropiedad",
    propiedadesController.subirArchivo,
    propiedadesController.actualizarPropiedad
  );

  //eliminar una propiedad
  router.delete(
    "/propiedades/:idPropiedad",
    propiedadesController.eliminarPropiedad
  );

  //USUARIOS
  //agregar un nuevo usuario
  router.post("/crear-cuenta", usuarioController.registrarUsuario);

  router.post("/iniciar-sesion", usuarioController.autenticarUsuario);

  return router;
};
