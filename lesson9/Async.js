//cuando ponemos Async significa que ese metodo esta obligado a regresar una promesa 
let promesa = new Promise((resolved) => {
    
    setTimeout(() => resolved ('saludos con promesa y timeout'),5000);
    
});

//declaramos nuestra promesa sin utilizar catch solo then
//promesa.then(valor => console.log(valor));

//async indica que una funcion regresa una promesa

async function miFuncionConPromesa(){
    return ' saludos con promesa y async ';
}


//miFuncionConPromesa().then(valor => console.log(valor ));

//async/await

async function miFuncionConPromesaYAwait(){
    let miPromesa = new Promise(resolved => {
        resolved('promesa con await');
    });
    console.log(await miPromesa);
}

miFuncionConPromesaYAwait();