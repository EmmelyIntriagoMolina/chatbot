//Definir persistencia
const libros= [
    {
        id:1,
        titulo:"Aprendamos PHP como en 1990",
        idautor:2
    },
    {
        id:2,
        titulo:"PHP para expertos",
        idautor:2
    },
    {
        id:3,
        titulo:"JavaScript para principiantes",
        idautor:1
    }
]

const autores=
[
    {
        id:1,
        nombre:'Pedro Piguave',
    },
    {
        id:2,
        nombre:'Juan Carlos'
    }

]

//función que busca autores por ID
function buscarAutorPorId(id,callback)
{
    //Buscamos en el arreglo libros uno que tenga ese ID
    const autor=autores.find(
        (autor)=>
            {
                return autor.id===id  ;
            }
    )
    //Si no existe generamos un error y lo enviamos al callback
    if(!autor)
    {
        const error= new Error();
        error.message="El autor no existe!!"
        return callback(error);
    }
    callback(null,autor)
}

//función que busca libros por ID
function buscarLibroPorId(id,callback)
{
    //Buscamos en el arreglo libros uno que tenga ese ID
    const libro=libros.find(
        (libro)=>libro.id===id  
    )
    //Si no existe generamos un error y lo enviamos al callback
    if(!libro)
    {
        const error= new Error();
        error.message="El libro no existe!!"
        return callback(error);
    }
    callback(null,libro)
}

//CALLBACK HELL
buscarLibroPorId(2,(err,libro)=>{
    if(err)
    {
        return console.log(err.message)
    }
    buscarAutorPorId(libro.idautor,(err,autor)=>{
    if(err)
    {
        return console.log(err.message);
    }
    libro.autor=autor;
    delete libro.idautor;
    console.log(libro)
    //console.log(`El libro ${libro.titulo} fue escrito por ${autor.nombre}`);
    })
    
})
