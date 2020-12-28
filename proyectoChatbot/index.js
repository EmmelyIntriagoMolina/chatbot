//librerias instaladas
const mongoose = require('mongoose');
const express = require('express');
//componentes locales
const { MONGO_URI } = require('./config')
const app = express();
const PUERTO=3000;

//conectarnos a nuestra base de datos
mongoose.connect(MONGO_URI, { useNewUrlParser:true, useUnifiedTopology:true })
.then(p=>{
    console.log('Conexion exitosa')
}).catch(err=>{
    console.log('Error de conexión',err);
}) ;

app.use('/public', express.static(__dirname+'/public'))
app.use(express.json())
app.use("/",require("./rutas/index.rutas"))

app.listen(PUERTO,() =>{
    console.log(`El servidor está escuchando por el puerto ${PUERTO}`);
});
