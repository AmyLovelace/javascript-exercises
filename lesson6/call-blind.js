let michi1 = {
    nombre : 'katiuska',
    apellido : 'molotov',
    nombreCompleto : function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel ;
    }
}

let michi2 ={
    nombre:'copin',
    apellido:'armando',
}
console.log(michi1.nombreCompleto( 'callejera', 6666666666))
console.log(michi1.nombreCompleto.call(michi2 , 'adicto al churu', 6666666666))