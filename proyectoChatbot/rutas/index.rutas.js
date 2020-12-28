const express = require('express');
const router = express.Router();
const Product = require("../models/productos.model")

//GET
router.get('/', async (req,res)=>{
    res.send({ok:true,msg:"Esto está funcionando bien"})
})

//POST agregar nuevos productos a la base de datos
router.post('/productos', (req,res)=>{
    let product = new Product ({
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        categoria:req.body.categoria,
        cantidad:req.body.cantidad,
        precio:req.body.precio,
        img:req.body.img,
    });
    product.save(()=>{
        //if(error) return res.json({ok:false,msg:"Hubo un error"});
        res.json({"Mensaje":"Producto almacenado sin problemas!"});
    })
    
});
/*
//PUT
router.put('/productos', (req,res)=>{
    //primero filtrar el elemento que queremos editar
    let product = new Product ({
        filtrado = product.filter(p=>{return p.nombre === req.body.nombre;})[0],
        //modificar los atributos
        filtrado.descripcion=req.body.descripcion,
        filtrado.categoria=req.body.categoria,
        filtrado.cantidad=req.body.cantidad,
        filtrado.precio=req.body.precio,
        filtrado.img=req.body.img,
    });
    product.save(()=>{
        //if(error) return res.json({ok:false,msg:"Hubo un error"});
        res.json({"Mensaje":"Producto actualizado sin problemas!"})
    })
});*/

module.exports = router;