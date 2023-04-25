class Persona{
    static contadorPersonas = 0;

    constructor (nombre,apellido,edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad ;  
        this._idPersona = ++Persona.contadorPersonas;
    }

    get idPersona(){
        return this._idPersona    
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

    get edad(){
        return this._edad;
    }
    
    set edad(edad){
        this._edad = edad;
    }

   
    toString(){
        return this.idPersona+' '+ this._nombre + ' ' + this._apellido + ' ' + this._edad;
    }

}

class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
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

class Cliente extends Persona{

    static contadorClientes = 0;
    
    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this._idCliente=++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;

    }
    set fechaRegistro(fechaRegistro){
        this._fecha=fechaRegistro;
    }

    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }


}

//hacer clase person

let persona1= new Persona('Ami','Cabrera',28);
console.log(persona1.toString());

let persona2= new Persona('Tomi','Cabrera',31);
console.log(persona2.toString());

let Empleado1 = new Empleado('Ada','Lovelace','48',20000);
console.log(Empleado1.toString());

let Empleado2 = new Empleado('Inay','Craft','8',10000);
console.log(Empleado2.toString());

let cliente1 = new Cliente('copo','cabrera',4,new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente('chechi','calle',3,new Date());
console.log(cliente2.toString());