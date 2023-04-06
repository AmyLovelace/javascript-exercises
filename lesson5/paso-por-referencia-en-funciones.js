//creando objetos
const persona = {
    nombre:'Ami',
    apellido:'Cabrera'
}

function cambiarValoraObjeto(p1){
    p1.nombre= 'copin'
    p1.apellido ='ponpin'
}
//paso por referencia
cambiarValoraObjeto(persona);
console.log(persona)






















