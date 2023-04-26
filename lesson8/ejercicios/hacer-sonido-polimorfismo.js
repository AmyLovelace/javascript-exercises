//Problema: Crear una clase llamada "Animal" que tenga un método llamado 
//"hacerSonido()" que debe ser implementado por cada una 
//de sus subclases: "Perro" y "Gato".

class Animal{
    static contadorAnimales=0;

    constructor(raza,alimentacion){
        this._idAnimal = ++Animal.contadorAnimales;
        this._raza = raza;
        this._alimentacion = alimentacion;
    }
    get idAnimal() {
        return this._idAnimal;
    }
    get raza(){
        return this._raza
    }
    set raza(raza){
        this._raza = raza;
    }
    get alimentacion(){
        return this._alimentacion
    }
    set alimentacion(alimentacion){
        this._alimentacion = alimentacion;
    }
   
    toString(){
        return ` Animal nro: ${this.idAnimal} \n Raza: ${this.raza} \n Alimentacion: ${this.alimentacion}`
    }
}

class Perro extends Animal{
    static contadorPerros = 0;

    constructor(raza,alimentacion){
        super(raza,alimentacion)
        this._idPerro = ++Perro.contadorPerros;
    }
    get idPerro() {
        return this._idPerro;
    }
    
    hacerSonido(){
        return 'GuaGua'
    }

    toString(){
        return  `${super.toString()} \n Perro nro: ${this._idPerro} \n Sonido: ${this.hacerSonido()}` 
    }

}

class Gato extends Animal{
    static contadorGatos = 0;

    constructor(raza,alimentacion){
        super(raza,alimentacion)
        this._idGato = ++Gato.contadorGatos;
    }
    get idGato() {
        return this._idGato;
    }
    
    hacerSonido(){
        return 'rauuul'
    }

    toString(){
        return  `${super.toString()}  \n Gato nro: ${this._idGato} \n Sonido: ${this.hacerSonido()}` 
    }

}



let perro1 = new Perro('Pug','omnivoro');
console.log(perro1.toString())

let animal1 = new Animal('Gato','Carnivoro');
console.log(animal1.toString());

let gato1 = new Gato('Gato','Carnivoro');
console.log(gato1.toString());