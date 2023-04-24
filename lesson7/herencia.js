
class Michi{

    static contadorMichis = 0;//atributo de nuestra clase

    email ='Valor default email'; //atributo de nuestros objetos 

    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this.idMichi= ++Michi.contadorMichis;
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
        return this.idMichi + ' ' + this._nombre + ' ' + this._apellido;
    }
    //sobreescribiendo el metodo de la clase padre (object)
    toString(){
        //se aplica polimorfismo(multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre o hijo
        return this.nombreCompleto();
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
     //Sobreescritura
     nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let micha = new Michi('Katiuska', 'Molotov');
console.log(micha.toString());//get nombre

let micha2 = new Michi('copin', 'bombin');
console.log(micha2.toString());

let Empleada = new Empleado('Ami','Cabrera','IT');
console.log(Empleada.toString());
console.log(Michi.contadorMichis);