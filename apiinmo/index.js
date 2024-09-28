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

// Habilitar CORS abierto
const cors = require("cors");
app.use(cors()); // Permitir peticiones de cualquier origen

// Habilitar archivos estáticos
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// rutas de la app
app.use("/", routes());

// puerto
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 2000;

// iniciar app
app.listen(port, host, () => {
  console.log("El servidor está funcionando");
});
