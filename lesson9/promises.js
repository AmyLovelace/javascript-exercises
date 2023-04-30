//declarar variable
let miPromesa = new Promise((resolved,rejected) => {//la promesa recibe dos parametros ambos funciones callback la primera es la que queremos ejecutar y la segunda es una funcion para ejecutar en caso de fallo
    let expresion = false; 
    if (expresion)
        resolved('Resolvió correcto');
    else
        rejected('se produjo un error');
});

miPromesa.then(valor => console.log(valor), error => console.log(error));






