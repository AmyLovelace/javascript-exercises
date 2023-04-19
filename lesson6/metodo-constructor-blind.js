function michis(nombre,apellido,status){
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
    this.status = status;

}

let katiuska = new michis('katiuska', 'molotov', 'dissapear');
console.log(katiuska.nombreCompleto(),katiuska)

let copito = new michis ('copito', 'armando','8 lifes left');
console.log(copito.status)