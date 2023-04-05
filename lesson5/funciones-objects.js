//las funciones pueden ser descritas como objetos

//declaracion de la funcion
function misMichitos (a,b){
   console.log(arguments.length)
    return a + b;
}

//lamado de la funcion con ( y los argumentos,argumentos)
let resultado = misMichitos(1,2);
console.log(resultado)

//declaracion funcion de tipo expresion
let x =function(a,b){return a + b}

resultado =x(1 , 2)
console.log(resultado)



var misMichitostexto = misMichitos.toString();

console.log(misMichitostexto)













