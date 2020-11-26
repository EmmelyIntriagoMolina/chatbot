/*const frutas=[
    "manzana",
    "pera",
    "uva",
    "tomate",
]

for(const fruta of frutas)
{
    console.log(fruta);
}
/*
const numeros=new Set();
numeros.add(5);
numeros.add(7);
numeros.add(9);

numeros.add(7);
numeros.add(5);

console.log(numeros);


 const estudiantes = new Map();
 estudiantes.set("1307828341","John Cevallos");

 console.log(estudiantes.get("1307828341"));
 */ 

const persona={
    nombre:"Jhon",
    apellido:"Cevallos",
    estudiante:false,
    getNombreCompleto(){
        return this.nombre+''+this.apellido;
    }
}
console.log(persona.getNombreCompleto())