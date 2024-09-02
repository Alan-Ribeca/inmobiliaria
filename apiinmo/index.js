const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

// crear el servidor
const app = express();

// habilitar bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// conectar mongo a la bd
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/apiinmo");

//habilitar cors
const cors = require("cors");

// Habilitar archivos estáticos
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//habilitar cors
app.use(cors());

// rutas de la app
app.use("/", routes());

// puerto
app.listen(2000);
