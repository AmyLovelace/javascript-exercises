//definir funcion

//aqui podemos asignar la funcion a una variable


//llamamos nuestra funcion , si ocupamos el hoisting podemos porner la llamada de la funcion antes de definirla 
//miPrimeraFuncion();

//const miFuncionFlecha = () => {
//
//    console.log('es mi funcion flecha no la tuya!');
//
//}

//miFuncionFlecha();


//const saludar = () => {
//    return 'saludo desde arrow function ';}


const saludar = () => 'saludo desde arrow function '; //asi se simplificaria la arrow function

console.log(saludar());

const regresaObjeto = () => ({nombre:'Ami', apellido:'Cabrera'});
console.log(regresaObjeto())

const funcionConParametrosClasico = function(mensaje){
    mensaje = 'saludar desde mi funcion clasica'
    console.log(mensaje)
    
}
funcionConParametrosClasico()


const funcionConParametros = (mensaje) => console.log (mensaje);
funcionConParametros('saludos con parametros');
















