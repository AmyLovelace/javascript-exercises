//promesa, await,async y settimeout

async function funcionConPromesaAwaitTimeout(){
    console.log('inicio de funcion fuera de la promesa');
    let miPromesa = new Promise(resolver => {
        setTimeout(()=> resolver('Promesa con await y timeout'),3000);
    });
    console.log(await miPromesa);
    console.log('fin de la funcion fuera de la promesa');
}

funcionConPromesaAwaitTimeout();