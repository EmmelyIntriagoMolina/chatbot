const mongoose = require('mongoose');

// indicar que vamos a trabajar con esquemas de Mongoose
const { Schema } = mongoose
const ProductosSchema = new Schema(
    {
        nombre: {type:String,required:true},
        descripcion: {type:String,required:true},
        categoria: {type:Number,required:true},
        cantidad: {type:Number,required:true},
        precio: {type:Number,required:true},
        img: {type:String}

    },
    { timestamps: { createdAt: true, updateAt:true  } }
)
module.exports = mongoose.model("Productos", ProductosSchema);