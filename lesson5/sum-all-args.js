//llamar a la funcion y despues definirla

let resultado = sumarTodo(5, 4, 13, 10, 9, 10, 5, 2);

console.log(resultado);

function sumarTodo(){
    let suma = 0;
    for(i = 0; i < arguments.length; i++)  {

        suma += arguments[i];
    }
    return suma;
}