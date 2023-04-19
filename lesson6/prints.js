let persona = { 
    nombre : 'Ami',
    apellido: 'Lovelace',
    email:'AmyLovelace@gmail.com',
    edad:28,
    nombreCompleto: function(){
        return this.nombre +' ' + this.apellido;

    }
}

console.log(persona);

//concatenar cada valor de cada propiedad

console.log(persona.nombre + ', ' + persona.apellido);

//for in

for (nombrePropiedad in persona ){
    console.log(persona[nombrePropiedad]);
}

//object values (lo devuelve como un array)

let personaArray = Object.values(persona);
console.log(personaArray);

//json.stringify

let personaString = JSON.stringify(persona);
console.log(personaString)