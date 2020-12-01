const mongoose=require('mongoose');

//Indicar que vamos a trabajar con esquemas de mongoose
const {Schema}=mongoose

const NoticiasSchema= new Schema(
    {
        titulo:{type:String},
        enlace:{type:String}
    },
    {timestamps:{createdAt:true,updatedAt:true}}
)

module.exports=mongoose.model("Noticias", NoticiasSchema);