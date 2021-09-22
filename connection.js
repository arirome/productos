const mongoose = require("mongoose");
require('dotenv').config();
mongoose
  .connect(process.env.ATLAS)
  .then(() => console.log("Conectado a la base de datos"))
  .catch((err) => console.error(err));