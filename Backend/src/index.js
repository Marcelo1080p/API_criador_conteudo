const express = require("express");
const Routes = require("./Routes/Routes");

const app = express();

app.use(express.json());
app.use(Routes);

app.listen(3001, console.log("Servidor inciado"))