const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/zetelle"

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(success => console.log("Conectado a la base de datos"))
.catch(err => console.log(err))