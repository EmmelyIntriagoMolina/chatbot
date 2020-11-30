//SUPERMERCADO
//ARREGLO PEDIDOS
const pedidos= [
    {
        id:1,
        fecha:"07/11/20",
        idcliente:1,
        idproducto:1
    },
    {
        id:2,
        fecha:"17/11/20",
        idcliente:2,
        idproducto:3
    },
    {
        id:3,
        fecha:"22/11/20",
        idcliente:3,
        idproducto:4
    }
]

//ARREGLO CLIENTES
const clientes= [
    {
        id:1,
        nombre:"Emmely Intriago",
        direccion:"Cdla Elegolé",
        telefono:0997851209
    },
    {
        id:2,
        nombre:"Neivis Franco",
        direccion:"San Mateo",
        telefono:0897851210
    },
    {
        id:3,
        nombre:"Pedro Cedeño",
        direccion:"La Aurora",
        telefono:0987851215
    }
]

//ARREGLO PRODUCTOS
const productos= [
    {
        id:1,
        descripcion:"Shampoo 200ml",
        precio:"3,00"
    },
    {
        id:2,
        descripcion:"Cereal Chocapic",
        precio:"4,00"
    },
    {
        id:3,
        descripcion:"Caja de 5 Aceites Girasol",
        precio:"11,50"
    },
    {
        id:4,
        descripcion:"Jamón Ahumada Plumrose 1kg",
        precio:"7,00"
    }
]

//APLICAR PROMESAS
//Función buscar pedido por id
function buscarPedidoPorId(id,callback)
{
    return new Promise((resolve,reject)=>{
        //Buscamos en el arreglo el pedido que tenga ese id
        const pedido=pedidos.find(
            (pedido)=>pedido.id===id  
        )
        //Si no existe generamos un error y lo enviamos al callback
        if(!pedido)
        {
            const error= new Error();
            error.message="El pedido no existe!!"
            reject(error);
        }
        resolve(pedido)

    })
}

//APLICAR PROMESAS
//Función buscar cliente por id
function buscarClientePorId(id,callback)
{
    return new Promise((resolve,reject)=>{
        //Buscamos en el arreglo el cliente que tenga ese id
        const cliente=clientes.find(
            (cliente)=>cliente.id===id  
        )
        //Si no existe generamos un error y lo enviamos al callback
        if(!cliente)
        {
            const error= new Error();
            error.message="El cliente no existe!!"
            reject(error);
        }
        resolve(cliente)

    })
}

//APLICAR PROMESAS
//Función buscar producto por id
function buscarProductoPorId(id,callback)
{
    return new Promise((resolve,reject)=>{
        //Buscamos en el arreglo el producto que tenga ese id
        const producto=productos.find(
            (producto)=>producto.id===id  
        )
        //Si no existe generamos un error y lo enviamos al callback
        if(!producto)
        {
            const error= new Error();
            error.message="El producto no existe!!"
            reject(error);
        }
        resolve(producto)
    })
}

let pedidoAuxiliar={};
buscarPedidoPorId(2).then(pedido=>{
    pedidoAuxiliar=pedido;
    return buscarClientePorId(pedido.idcliente); 
}).then(cliente=>{
    pedidoAuxiliar.cliente=cliente;
    delete pedidoAuxiliar.idcliente; 
})
.catch(err=>{
    console.log(err.message)
})

buscarPedidoPorId(2).then(pedido=>{
    pedidoAuxiliar=pedido;
    return buscarProductoPorId(pedido.idproducto); 
}).then(producto=>{
    pedidoAuxiliar.producto=producto;
    delete pedidoAuxiliar.idproducto; 
    console.log(pedidoAuxiliar)
})
.catch(err=>{
    console.log(err.message)
})

