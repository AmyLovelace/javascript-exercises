//declarar variable
//let miPromesa = new Promise((resolved,rejected) => {//la promesa recibe dos parametros ambos funciones callback la primera es la que queremos ejecutar y la segunda es una funcion para ejecutar en caso de fallo
//    let expresion = false; 
//    if (expresion)
//        resolved('Resolvió correcto');
//    else
//       rejected('se produjo un error');
//});

//miPromesa.then(valor => console.log(valor), error => console.log(error));
//miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));

let promesa = new Promise((resolved) => {
    console.log('inicio promesa');
    setTimeout(() => resolved ('saludos con promesa y timeout'),3000);
    console.log('fin promesa');
});

//declaramos nuestra promesa sin utilizar catch solo then
promesa.then(valor => console.log(valor));

