let persona1 = {
    nombre :'juan',
    apellido:'juanin',
    nombreCompleto : function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 ={
    nombre : 'carlos',
    apellido:'carlin'
}


console.log(persona1.nombreCompleto.call(persona2))