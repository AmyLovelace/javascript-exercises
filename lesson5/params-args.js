//declaracion de funcion de tipo expresion
let sumar = function (a =2 , b=1 ){  
    
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b + arguments[2]

};

resultado = sumar(3,2,7);//los valores de los parametro entregados en el llamado de la funcion sobreescriben el de los parametros by default
console.log(resultado);
