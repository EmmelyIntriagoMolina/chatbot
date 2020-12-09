const mongoose = require('mongoose');

// indicar que vamos a trabajar con esquemas de Mongoose
const { Schema } = mongoose


const NoticiasSchema = new Schema(
    {
        titulo: {type:String},
        enlace: {type:String}
    },
    { timestamps: { createdAt: true, updateAt:true  } }
)


module.exports = mongoose.model("Noticias", NoticiasSchema);
