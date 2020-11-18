const calificacion=85

if(calificacion>=90)
{
    console.log(`A`)
}
else if(calificacion>=80 && calificacion<90)
{
    console.log(`B`)
}
else if(calificacion>=70 && calificacion<80)
{
    console.log(`C`)
}
else 
{ 
    cnsole.log(`Reprobado`)
} 


const n1=80;
const n2=90;

const operacion="sumar"

switch(operacion)
{
    case "sumar":
        console.log(n1+n2);
        break;
    case "restar":
        console.log(n1-n2);
        break;
    case "multiplicar":
        console.log(n1*n2);
        break;
    default:
        console.log("Esta operación no se encuentra");
}