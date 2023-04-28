//Escribe una función en JavaScript que tome un objeto y verifique si es una 
//instancia de la clase Array. Si el objeto es una instancia de Array, 
//la función debe devolver true; de lo contrario, debe devolver false. 
//Puedes utilizar el operador instanceof para resolver este problema.

function esArray(obj){
    return obj instanceof Array;
}

let objeto1 = {a: 1, b:2, c:2, d:3, f:4, g:4};
let objeto2 = [1,2,3,4,5.6,7,8.9];

console.log(esArray(objeto2));
