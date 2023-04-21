
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

    static saludar(){
        console.log('saludos desde el metodo static');
    }
    static saludar2(micha){
        console.log(micha.nombre);
    }
}

class Empleado extends Michi{

    constructor(nombre,apellido,departamento){
        super(nombre, apellido);//llamar al constructor de la clase padre 
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}

let micha = new Michi('Katiuska', 'Molotov');
console.log(micha);//get nombre

let Empleada = new Empleado('Ami','Cabrera','IT');
console.log(Empleada);
console.log(Empleada.nombre);

//micha.saludar(); no es posible llamar un objeto static desde un objeto si desde una clase

Michi.saludar();
Michi.saludar2(micha);
