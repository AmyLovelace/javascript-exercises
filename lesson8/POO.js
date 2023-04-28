class Empleado{
    constructor(nombre,sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }


    obtenerDetalles(){
        return`Empleado: nombre :${this.nombre}, sueldo: $${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo)
        this.departamento = departamento;
    }
    obtenerDetalles(){
        return` Gerente: ${super.obtenerDetalles()} , dpto :${this.departamento}`;
    }

}

function determinarTipo(tipo){//se crea polimorfismo porque se puede utilizar
   
    console.log( tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log('es un objeto de tipo Gerente')
        console.log(tipo.departamento)
    }
    else if (tipo instanceof Empleado){
        console.log('es un objeto de tipo Empleado')
        console.log(tipo.departamento)
    }
}


let empleado1 = new Empleado('Ami',45000);
let gerente1 = new Gerente ('Adel', 60000, 'IT');

determinarTipo(gerente1);
determinarTipo(empleado1);

