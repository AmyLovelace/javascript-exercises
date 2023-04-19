function michis(nombre,apellido,status){
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
    this.status = status;

}

michis.prototype.tel = '44223311'


let katiuska = new michis('katiuska', 'molotov', 'dissapear');
console.log(katiuska.tel,katiuska)

let copito = new michis ('copito', 'armando','8 lifes left');
console.log(copito.tel,copito)