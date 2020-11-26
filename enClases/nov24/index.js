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
async function buscarAutorPorId(id,callback)
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
        throw callback(error);
    }
    return autor;
}

//función que busca libros por ID APLICAR PROMESAS
async function buscarLibroPorId(id,callback)
{
    //Buscamos en el arreglo libros uno que tenga ese ID
    const libro=libros.find(
        (libro)=>{
            return libro.id===id
        }
    )
    //Si no existe generamos un error y lo lanzamos
    if(!libro)
    {
        const error= new Error();
        error.message="El libro no existe!!"
        throw(error);
    }
    //de existir debemos retornarlo
    return libro;
}

async function mainx()
{
    try
    {
        //va a buscar un libro por el id 3
        const libro = await buscarLibroPorId(3);
        //luego que tengamos la respuesta vaos segun el id del libro encontrado a buscar su autor
        const autor = await buscarAutorPorId(libro.idautor);
        libro.autor=autor;
        delete libro.idautor;
        console.log(libro)
        //console.log(`El libro ${libro.titulo} tiene como autor a ${autor.nombre}`)
    
    }
    catch(ex)
    {
        console.log(ex.message);
    }
}

mainx();