// hacer una arrow function "filtrarPares" que filtra los numeros pares ocupando el operador .filter toma "numeros "como parametro de la funcion

const filtrarPares = (numeros) => numeros.filter(numero => numero % 2 === 0);//operador de estricta igualdad ( === )
console.log(filtrarPares([1,2,3,4,5,6,7,8,9,10,11,12,13]));
