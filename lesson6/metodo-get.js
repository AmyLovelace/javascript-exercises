//metodo get 
let michito ={
    nombre : 'katiuska',
    apellido : 'molotov',
    direccion : 'las encinas 930',
    status : 'dead',
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(michito.nombreCompleto);

