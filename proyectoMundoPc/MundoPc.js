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

    constructor(nombre,monitor,raton,teclado,){

        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor =monitor;
        this._raton =  raton;
        this._teclado = teclado;

    }
    toString(){
        return `Computadora: ${this._idComputadora}: ${this._nombre}\n ${this._monitor} \n ${this._raton} \n ${this._teclado} `;
    }


}













let raton1 = new Raton('BT','LG');
let raton2 = new Raton('USB','CASIO');

let teclado1 = new Teclado('bt','msi');
let teclado2 = new Teclado('usb','acer');

console.log(teclado1.toString());
console.log(teclado2.toString());

let monitor1 = new Monitor('bt',15);
let monitor2 = new Monitor('usb',21);

console.log(monitor1.toString());
console.log(monitor2.toString());

let computadora1 = new Computadora('HP',monitor1,teclado1,raton1);
let computadora2 = new Computadora('ACER',monitor2,teclado2,raton2);

console.log(computadora1.toString());
console.log(computadora2.toString());



