let bichito = {
    nombre : 'froper',
    apellido :'pupo',
    status : 'alive',
    get nombreCompleto () {
        return  this.nombre + ' ' + this.apellido ;
    }
}

console.log (bichito.nombreCompleto)
