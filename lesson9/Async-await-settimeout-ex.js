//hacer una funcion la cual imprima un mensaje despues de 5 segundos (settimeout)

async function saludoDesdeMiPromesa(){
    console.log('inicio de mi promesa');
    let miPromesa = new Promise(resolved => {
        setTimeout(() => resolved ('saludos desde mi promesa con await'),5000);
    });
    console.log(await miPromesa);
    console.log('fin de mi promesa');
}

saludoDesdeMiPromesa();