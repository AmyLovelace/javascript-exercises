
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
}

let Estado = new Status ('Katiuska', 'Molotov','desaparecida')
console.log(Estado)
 