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

//APLICAR PROMESAS
//función que busca autores por ID
function buscarAutorPorId(id)
{
    return new Promise((resolve,reject)=>{
        //Buscamos en el arreglo libros uno que tenga ese ID
    const autor=autores.find(
        (autor)=>
            {
                return autor.id===id  ;
            }
    )
    //Si no existe generamos un error y rechazamos la promesa
    if(!autor)
    {
        const error= new Error();
        error.message="El autor no existe!!"
        reject (error);
    }
    resolve (autor)
    })
    
}

//función que busca libros por ID
function buscarLibroPorId(id,callback)
{
    return new Promise((resolve,reject)=>{
        //Buscamos en el arreglo libros uno que tenga ese ID
        const libro=libros.find(
            (libro)=>libro.id===id  
        )
        //Si no existe generamos un error y lo enviamos al callback
        if(!libro)
        {
            const error= new Error();
            error.message="El libro no existe!!"
            reject (error);
        } //De no existir error aceptamos la promesa
        resolve (libro)
        
    })
}

let libroAuxiliar={};
buscarLibroPorId(3).then(libro=>{
    libroAuxiliar=libro;
    return buscarAutorPorId(libro.idautor);
}).then(autor=>{
    libroAuxiliar.autor=autor;
    delete libroAuxiliar.idautor;
    console.log(libroAuxiliar);
}).catch(err=>{
    console.log(err.message);
})

//retornar libroAuxiliar a nuestro usuario. Para que en el front-end
//muestre la información en el formato que él prefiera