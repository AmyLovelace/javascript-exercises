//una funcion callback es una funcion que se pasa como parametro a otra funcion 


function miFuncion1 (){
    console.log('mi funcion 1 ')
}

function miFuncion2 (){
    console.log('mi funcion 2 ')
}

miFuncion1()
miFuncion2()
miFuncion1()




//definimos la funcion callback
function imprimir(mensaje){
    console.log(mensaje)
}

function sumar(op1,op2,funcionCallback){
    let res = op1 + op2 ;
    funcionCallback(`Resultado es ${res}`)
}

sumar(5,3,imprimir)

//llamada asincrona con uso setTimeout 

//definir funcion

function miFuncionCallback(){
    console.log('saludo asincrono despues de 3 segundos ');
}

//recibe como parametro una funcion callback y su segundo parametro son los segundos para ejecutar la funcion
setTimeout(miFuncionCallback,3000);

setTimeout(function(){console.log('saludo asincrono a los 5 segundos  ')},5000);



