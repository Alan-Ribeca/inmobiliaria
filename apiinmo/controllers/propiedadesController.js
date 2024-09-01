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

// AGREGAR PROPIEDADES
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

// MOSTRAR PROPIEDADES
exports.mostrarPropiedades = async (req, res, next) => {
  try {
    const propiedades = await Propiedades.find({});
    res.json(propiedades);
  } catch (error) {
    console.log(error);
    next();
  }
};

//mostrar una propiedad por su id
exports.mostrarPropiedad = async (req, res, next) => {
  const propiedad = await Propiedades.findById(req.params.idPropiedad);
  if (!propiedad) {
    res.json({ mensaje: "El producto no existe" });
    return next();
  }

  //si la propiedad existe la mostramos
  res.json(propiedad);
};

//actualizar una propiedad
exports.actualizarPropiedad = async (req, res, next) => {
  // Obtener la propiedad a actualizar
  const propiedad = await Propiedades.findById(req.params.idPropiedad);
  if (!propiedad) {
    res.json({ mensaje: "La propiedad no existe" });
    return next();
  }

  try {
    // Construir una nueva propiedad
    let propiedadActualizada = req.body;

    // Verificar si hay una nueva imagen o usar la anterior
    if (req.files) {
      propiedadActualizada.imagenes = req.files.map((file) => file.filename);

      // Eliminar la imagen de la carpeta uploads
      const imagenesAnteriores = propiedad.imagenes;
      for (const imagen of imagenesAnteriores) {
        const imagenPath = path.join(__dirname, "..", "uploads", imagen);
        try {
          await fs.unlink(imagenPath);
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      propiedadActualizada.imagenes = propiedad.imagenes;
    }

    // Actualizar la propiedad en la base de datos
    const propiedadActualizadaEnBD = await Propiedades.findByIdAndUpdate(
      { _id: req.params.idPropiedad },
      propiedadActualizada,
      { new: true }
    );

    res.json(propiedadActualizadaEnBD);
  } catch (error) {
    console.log(error);
    next();
  }
};

//eliminar propiedad
exports.eliminarPropiedad = async (req, res, next) => {
  try {
    // Obtener la propiedad a eliminar
    const propiedad = await Propiedades.findById(req.params.idPropiedad);

    // Eliminar las imágenes asociadas a la propiedad de la carpeta uploads
    if (propiedad.imagenes) {
      const imagenes = propiedad.imagenes;
      for (const imagen of imagenes) {
        const imagenPath = path.join(__dirname, "..", "uploads", imagen);
        try {
          await fs.unlink(imagenPath);
        } catch (error) {
          console.log(error);
        }
      }
    }

    // Eliminar la propiedad de la base de datos
    await Propiedades.findByIdAndDelete(req.params.idPropiedad);
    res.json({ mensaje: "La propiedad se eliminó correctamente" });
  } catch (error) {
    console.log(error);
    next();
  }
};
