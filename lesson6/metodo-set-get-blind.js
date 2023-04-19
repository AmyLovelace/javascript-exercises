let familia = {

    nombre :'Cabrera',
    apellido : 'Messina',
    get Completo(){
        return this.nombre.toUpperCase();
    },
    set Completo(Completo){
        this.nombre = Completo.toUpperCase();
        
    },
}

console.log(familia.Completo)


