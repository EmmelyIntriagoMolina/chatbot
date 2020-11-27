//Crear una función que reciba N como parámetro y genere la tabla de multiplicar por consola utilizando recursividad.

var acumulador=1;
function tablaMultiplicar(n){
	if (acumulador<=12){
        console.log(acumulador, "*", n, "=", (acumulador*n), "\n");
        acumulador++;
        tablaMultiplicar(n) 
	}
}
tablaMultiplicar(4);