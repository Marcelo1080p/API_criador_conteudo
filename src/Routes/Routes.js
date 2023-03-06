const express = require("express");
const CriadorController = require("../../Controllers/CriadorController");
const Routes = express.Router();


Routes.post("/criador", CriadorController.store);
Routes.get("/criador", CriadorController.index)


module.exports = Routes;