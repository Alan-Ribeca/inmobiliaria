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

const dbUrl =
  process.env.NODE_ENV === "production"
    ? process.env.DB_URL_PROD
    : process.env.DB_URL_LOCAL;

// Configurar promesas globales
mongoose.Promise = global.Promise;

// Conectar a la base de datos
mongoose
  .connect(dbUrl)
  .then(() => console.log("Conectado a la base de datos"))
  .catch((error) =>
    console.error("Error conectando a la base de datos:", error)
  );

//definir un dominio para recibir peticiones
const whiteList = [process.env.FRONTEND_URL]; //aca recibe las peticiones dedes localhost 5173 (que es del front) tengo que cambiar esto cuando lo subo a vercel

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
