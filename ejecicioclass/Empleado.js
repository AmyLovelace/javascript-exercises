class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor(sueldo){
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleados;  
    }

    get idEmpleado(){
        return this._idEmpleado
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

   
    
    toString(){
        return `${super.toString()} 
                ${this._idEmpleado} 
                ${this._sueldo}`;
    }
}