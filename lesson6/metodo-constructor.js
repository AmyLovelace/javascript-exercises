//funcion constructor de objetos de tipo bichito
function bichito(nombre , apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

}

let insecto = new bichito('bichicio','tarantulo', 'btaran@gmail.com');
console.log(insecto);


let cucaracha = new bichito ('rachel', 'roach', 'rroach@gmail.com');
console.log(cucaracha);