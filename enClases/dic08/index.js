const express = require('express');
const app = express();
const PUERTO=3000;

let arreglo=[];

app.use('/public', express.static(__dirname+'/public'))
app.use(express.json())

//GET con todos los elementos
app.get('/',(req,res)=>{
    res.send(arreglo)
})


//GET individual
//localhost:3000/individual/pegazo
app.get('/individual/:nombrex',(req,res)=>{
    res.send(arreglo.filter(p=>{return p.nombre == req.params.nombrex;})[0])
})

//POST para agregar un recurso
app.post('/',(req,res)=>{
    arreglo.push(req.body)
    res.send({"Mensaje":"La mascota fue almacenada sin problemas!"})
})

//Modificar un recurso
/*
{"nombre":"pegazo"
"raza:"dela calle"
"color":"amarillo"
}
*/
app.put('/',(req,res)=>{
    //primero filtrar el elemento que queremos editar
    let auxiliar=req.body
    filtrado = arreglo.filter(p=>{return p.nombre === req.body.nombre;})[0]
    //modificar los atributos
    filtrado.raza=req.body.raza;
    filtrado.color=req.body.color;
    res.send({"Mensaje":"La mascota fue actualizada correctamente"})
})

//Eliminar un recurso
//localhost:3000/pegazo
/*
pegazo 
pegazo2 
pegazo3 
*/
app.delete('/',(req,res)=>{
    arreglo = arreglo.filter(p=>{return p.nombre !== req.params.nombrex;})
    res.send({"Mensaje":"Eliminado correctamente"})
})

app.listen(PUERTO,() =>{
    console.log(`El servidor está escuchando por el puerto ${PUERTO}`);
});


