const mongoose= require('mongoose')
const conexion=`mongodb+srv://emmely:emmely123@cluster0.08xxn.mongodb.net/sextoA?retryWrites=true&w=majority`;


mongoose.connect(conexion,{useNewUrlParser:true, useUnifiedTopology:true});

//definimos el modelo de usuario
const Usuario= new mongoose.model("Usuario", {nombre:String});

//En base al modelo creamos nuestro usuario
const usuarioInvitado = new Usuario({nombre:"Invitado"});

//Procedemos a almacenar el primer registro
usuarioInvitado.save(()=>{
    console.log("Datos almacenados correctamente")
    Usuario.find().then(console.log) //Ubicamos esta lía aquí para asegurarnos de que se muestren los usuarios una vez alamacenados

})

//Traer a todos los usuarios
/*Usuario.find().then(resultado=>{
    console.log(resultado)
})
//Traer un usuario específico
Usuario.find({nombre:"Invitado"}).then(console.log)*/ 
