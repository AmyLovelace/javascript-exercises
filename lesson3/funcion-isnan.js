//nan not a number

let miNumero = "17b";




let edad = Number (miNumero);
console.log( edad);

if(isNaN(edad)){
    console.log("no es un numero");
}
else{
    if (edad >=18){
        console.log("puedes votar");
    }
    else{
        console.log("no puedes votar");
    }
}


//ejemplo con operador ternario

let mayorDeedad =(edad >=18)? "puedes votar":"no puedes votar";
console.log(mayorDeedad)