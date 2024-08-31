const Propiedades = require("../models/Propiedades");

const multer = require("multer");
const shortid = require("shortid");
const fs = require("fs").promises;
const path = require("path");

// Configuración para Multer
const configuracionMulter = {
  storage: (fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __dirname + "../../uploads/");
    },
    filename: (req, file, cb) => {
      const extension = file.mimetype.split("/")[1];
      cb(null, `${shortid.generate()}.${extension}`);
    },
  })),
  fileFilter(req, file, cb) {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Formato no valido"));
    }
  },
};

// pasar la configuracion y el campo
const upload = multer(configuracionMulter).array("imagenes", 10);

//sube un archivo
exports.subirArchivo = (req, res, next) => {
  upload(req, res, function (error) {
    if (error) {
      res.json({ mensaje: error });
    }
    return next();
  });
};

// Controlador para agregar propiedades
exports.agregarPropiedades = async (req, res, next) => {
  const propiedades = new Propiedades(req.body);

  try {
    if (req.files) {
      propiedades.imagenes = req.files.map((file) => file.filename);
    }
    await propiedades.save();
    res.json({ mensaje: "La propiedad se agregó correctamente" });
  } catch (error) {
    console.log(error);
    next(); // Pasar el error al siguiente middleware
  }
};
