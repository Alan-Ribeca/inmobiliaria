const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config({ path: "variables.env" });

// crear el servidor
const app = express();

// habilitar bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// conectar mongo a la bd
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL);

//definir un dominio para recibir peticiones
const whiteList = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: (origin, callback) => {
    const existe = whiteList.some((dominio) => dominio === origin);
    if (existe) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"), false);
    }
  },
};

//habilitar cors
const cors = require("cors");

// Habilitar archivos estáticos
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//habilitar cors
app.use(cors(corsOptions));

// rutas de la app
app.use("/", routes());

// puerto
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 2000;

//iniciar app
app.listen(port, host, () => {
  console.log("El servidor esta funcionando");
});
