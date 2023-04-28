'use strict'

let resultado = '1';

try{
    //x = 10;

    if(isNaN(resultado))throw 'no es un numero';
    else if(resultado === '') throw 'es una cadena vacia';
    else if (resultado >= 0) throw 'valor positivo';
    else if (resultado < 0) throw 'valor negativo';

}
catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);

}
finally{
    console.log('termina revision de errores');
}

