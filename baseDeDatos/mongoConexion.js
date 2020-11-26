const mongoose= require('mongoose')
const url=`mongodb+srv://emmely:emmely123@cluster0.08xxn.mongodb.net/sextoA?retryWrites=true&w=majority`;

const connectionParams={
    useNewParse:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}

mongoose.connect(url,connectionParams)
.then(()=>{
    console.log('Conexión Satisfactoria')
}).catch(err=>{
    console.log(`Error de Conexión. \n ${err}`)
})