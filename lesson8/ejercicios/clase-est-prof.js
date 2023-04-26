// Problema: Crear una clase llamada "Persona" que tenga dos subclases: "Estudiante" y "Profesor". La clase Persona debe tener las propiedades
// "nombre" y "edad" y un método "presentarse()" que muestre por consola el nombre y la edad de la persona.
// La subclase Estudiante debe tener una propiedad adicional "curso" y un método "estudiar()" que muestre por consola 
// el mensaje "Estoy estudiando [curso]".
// La subclase Profesor debe tener una propiedad adicional "materia" y un método "enseñar()" que muestre por consola 
// el mensaje "Estoy enseñando [materia]".

class Persona{
    constructor(nombre,edad){
        this._nombre = nombre;
        this._edad = edad ;
    }
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    get edad(){
        return this._edad
    }
    set edad (edad){
        this._edad = edad;
    }
    
    presentarse(){
        return `Hola! mi nombre es ${this._nombre}, tengo ${this._edad} años de edad `
    }

}

class Estudiante extends Persona{
    constructor(nombre,edad,curso){
        super(nombre,edad);
        this.curso = curso;
    }
    
    estudiar(){
        return `${super.presentarse()}y estoy estudiando ${this.curso}.`
    }



}
class Estudiante extends Persona{
    constructor(nombre,edad,curso){
        super(nombre,edad);
        this.curso = curso;
    }
    
    estudiar(){
        return `${super.presentarse()}y estoy estudiando ${this.curso}.`
    }



}

let estudiante1 = new Estudiante('Ami', 28, 'Desarrollo Web')
console.log(estudiante1.estudiar())
