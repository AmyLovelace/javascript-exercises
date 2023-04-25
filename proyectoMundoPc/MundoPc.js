class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }
    
}

class Raton extends DispositivoEntrada{

    static contadorRatones = 0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }


    toString(){
        return `idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca} `;
    }
}


class Teclado extends DispositivoEntrada{
    
    static contadorTeclados = 0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca} `;
    }
}


class Monitor{
    static contadorMonitores = 0;

    constructor(marca,tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }
    
    toString(){
        return `idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño} `;
    }


}

class Computadora{

    static contadorComputadoras= 0 ;

    constructor(nombre,Raton,Teclado,Monitor){

        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._Raton =  Raton.toString();

    }


}


let teclado1 = new Teclado('bt','msi');
let teclado2 = new Teclado('usb','acer');

console.log(teclado1.toString());
console.log(teclado2.toString());

let monitor1 = new Monitor('bt','azure');
let monitor2 = new Monitor('usb','toyotomi');

console.log(monitor1.toString());
console.log(monitor2.toString());




