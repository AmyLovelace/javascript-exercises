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

function imprimir(tipo){//se crea polimorfismo porque se puede utilizar
   
    console.log( tipo.obtenerDetalles());
    if(tipo instanceof Empleado){
        console.log('es un objeto de tipo Empleado')
    }
}


let empleado1 = new Empleado('Ami',45000);
let gerente1 = new Gerente ('Adel', 60000, 'IT');

imprimir(gerente1);
imprimir(empleado1);

