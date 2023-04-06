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
console.log(persona.email)
console.log(persona.edad)

console.log(persona)
console.log(persona.nombreCompleto())