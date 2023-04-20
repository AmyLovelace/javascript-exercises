class michi {
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

let micha = new michi('Katiuska', 'Molotov');
micha.nombre ='copin'
console.log(micha)
