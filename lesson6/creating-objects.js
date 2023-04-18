let persona = {
    nombre : 'Ami',
    apellido: 'Lovelace',
    email:'AmyLovelace@gmail.com',
    edad:28,
    nombreCompleto: function(){
        return this.nombre +' ' + this.apellido;

    }
}

console.log(persona.apellido)
console.log(persona.nombre)

console.log(persona)
console.log(persona.nombreCompleto())

let persona2 = new Object();
persona2.nombre = 'Adel';
persona2.apellido = 'Cabrera';
persona2.tel = '22223333'

console.log(persona2)


let persona3 = new Object();
persona3.nombre ='katiuska';
persona3.apellido = 'molotov';
persona3.direccion ='las encinas 930';
persona3.edad ='3 años';

console.log(persona3)





















