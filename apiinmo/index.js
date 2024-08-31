const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// crear el servidor
const app = express();

// habilitar bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// conectar mongo a la bd
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/apiinmo");

// rutas de la app
app.use("/", routes());

// puerto
app.listen(2000);
