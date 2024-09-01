const Usuarios = require("../models/Usuario");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.registrarUsuario = async (req, res) => {
  //leer los datos del usuario y colocarlos en el modelo de la bd
  const usuario = new Usuarios(req.body);
  usuario.password = await bcrypt.hash(req.body.password, 12);

  try {
    //guardar en la bd
    await usuario.save();
    res.json({ mensaje: "Usuario registrado correctamente" });
  } catch (error) {
    console.log(error);
    res.json({ mensaje: "Ocurrio un error al registrar el usuario" });
  }
};

exports.autenticarUsuario = async (req, res) => {
  //buscamos el usuario
  const usuario = await Usuarios.findOne({ email: req.body.email });

  //validar si existe o no el usuario
  if (!usuario) {
    await res.status(401).json({ mensaje: "Usuario no encontrado" });
  } else {
    //usuario existe, ver si la contraseña es correcta o incorrecta
    if (!bcrypt.compareSync(req.body.password, usuario.password)) {
      //password incorrecto
      return res.status(401).json({ mensaje: "Contraseña incorrecta" });
    } else {
      //password correcto, generar token
      const token = jwt.sign(
        {
          email: usuario.email,
          usuario: usuario.usuario,
          id: usuario._id,
        },
        "LLAVESECRETA",
        { expiresIn: "6h" }
      );
      //retornar el token
      res.json(token);
    }
  }
};
