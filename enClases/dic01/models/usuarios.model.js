const mongoose = require('mongoose');

// indicar que vamos a trabajar con esquemas de Mongoose
const { Schema } = mongoose


const UsuariosSchema = new Schema(
    {
        nombre: {type:String},
        apellido: {type:String}
    },
    { timestamps: { createdAt: true, updateAt:true  } }
)


module.exports = mongoose.model("Usuarios", UsuariosSchema);
