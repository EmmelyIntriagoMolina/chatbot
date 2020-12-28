const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// indicar que vamos a trabajar con esquemas de Mongoose
const { Schema } = mongoose
const UsuariosSchema = new Schema(
    {
        cedula: {type:String, required:true},
        nombre: {type:String, required:true},
        apellido: {type:String, required:true},
        correo: {type:String, required:true},
        contraseña: {type:String, required:true}
    },
    { timestamps: { createdAt: true, updateAt:true  } }
)

//Encriptar la contraseña
UsuariosSchema.methods.encriptarContraseña = async contraseña=> {
    const salt= await bcrypt.genSalt(10);
    return await bcrypt.hash(contraseña,salt);
};

UsuariosSchema.methods.compararConstraseñas = async function(contraseña){
    await bcrypt.compare(contraseña, this.constraseña)
}
module.exports = mongoose.model("Usuarios", UsuariosSchema);

