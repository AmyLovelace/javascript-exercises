
class Michi{
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

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre +' ' + this._apellido;
    }
//aobreescribiendo el metodo de la clase padre 
    toString(){
        //se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre o hijo
        return this.nombreCompleto();
    }
}

class Status extends Michi{
    constructor(nombre,apellido,status){
        super(nombre,apellido)
        this._status = status;
    }

    get status(){
        return this._status;
    }

    set status(status){
        this._status = status;
    }

    //sobreescritura
    nombreCompleto(){
        return super.nombreCompleto()+', ' + this._status;
    }
}

let Estado = new Status ('Katiuska', 'Molotov','desaparecida')
console.log(Estado.nombreCompleto())
 
console.log(Estado.toString())