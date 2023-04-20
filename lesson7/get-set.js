
//no se puede crear objetos antes de declarar la clase 
//no se aplica el conceto de hoisting

let micha2 = new michi ('pupo','íuoo');//not defined



class michi{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}

let micha = new michi('Katiuska','Molotov');
micha.nombre = 'chechi'// set nombre 

console.log(micha.nombre)//metodo get nombre

