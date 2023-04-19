//funcion constructor de objetos de tipo bichito
function bichito(nombre , apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }

}

let insecto = new bichito('bichicio','tarantulo', 'btaran@gmail.com');
console.log(insecto.nombreCompleto());


let cucaracha = new bichito ('rachel', 'roach', 'rroach@gmail.com');
console.log(cucaracha.nombreCompleto());

//asi podemos reutilizar codigo para crear objetos con los parametros que necesitemos 