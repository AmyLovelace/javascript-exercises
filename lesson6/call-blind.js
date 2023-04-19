let michi1 = {
    nombre : 'katiuska',
    apellido : 'molotov',
    nombreCompleto : function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let michi2 ={
    nombre:'copin',
    apellido:'armando',
}

console.log(michi1.nombreCompleto.call(michi2))