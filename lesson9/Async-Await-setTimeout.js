//promesa,await ,async y setTimeout

async function funcionConPromesaAwaityTimeout(){
    console.log('inicio de la funcion');
    let miPromesa = new Promise(resolved => {
        setTimeout(() => resolved ('promesa con await y timeout'), 3000);
    });
    console.log(await miPromesa);
    console.log('fin de la funcion');
}

funcionConPromesaAwaityTimeout();





