'use strict'
//ejercicio try catch manejo de errores

//envolver la expresion con error en un bloque try-catch
try{
    
    //x = 10;
    //mifuncion();
    let x = 10; //sin error se salta CATCH y se ejecuta FINALLY
}
//utilizamos el catch para "capturar"el error y lo utilizamos en el parametro de la variable catch 
//la mandamos a imprimir , nos devuelve el error y logramos que siga leyendo el programa. 

catch(error){
    console.log(error);

}
//podemos agregar el bloque FINALLY(opcional) que siempre se ejecutara independiente que haya dentro del TRY
finally{
    console.log('termina la revisión de errores');
}

console.log('continuamos..')










