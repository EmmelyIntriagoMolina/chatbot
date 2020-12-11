const fs=require('fs');
const path =require('path')
const express= require('express');

const PUERTO=3000
const index = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
const server= express();


//dfinir ruta del proyecto
//var paginaDeError = path.join( _dirname, "./error.html")

//utilizando una funcion normal y llamándola en linea
server.get("/", devolverIndex)

//utilizando una función flecha
server.get("/about", (req,res)=>{
    res.write(about)
})
//anteriormente bodyparser, ahora viene en el CORE de NODE
//Middleware son hooks más fuertes completos
server.use(express.json())

server.listen(PUERTO,()=>{
    console.log(`Servidor ejecutándose por el puerto ${PUERTO}`)
})
//definiendo un Middleware muy básico
server.use((req,res,next)=>{
    res.status(404).sendFile(paginaDeError)
})

function devolverIndex(req,res)
{
    res.write(index)
}
/*
const fs = require('fs')
const http = require('http')
const index = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
http.createServer((request,response)=>{
    const { url } = request;
    if (url==='/') 
    {
        response.writeHead(200, {"Content-type":"text/html"});
        response.write(index);
    }
    else if (url==='/about')
    {
        response.writeHead(200, {"Content-type":"text/html"});
        response.write(about);
    }
    else
    {
        response.writeHead(404, {"Content-type":"text/html"});
        response.write("Not found!!");
    }
})
.listen(3000, ()=>{
    console.log('Servidor corriendo')
})*/