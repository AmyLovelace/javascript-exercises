let michi1 = {
    nombre : 'katiuska',
    apellido : 'molotov',
    nombreCompleto : function(titulo, tel ){
        //return this.nombre + ' ' + this.apellido;
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel ;
    }
}

let michi2 ={
    nombre:'copin',
    apellido:'armando',
}
console.log(michi1.nombreCompleto('callejera', 66668666))

let arreglo = ['adicto a churus', '5555558555']
console.log(michi1.nombreCompleto.apply(michi2,arreglo ))