let michito ={
    nombre : 'katiuska',
    apellido : 'molotov',
    direccion : 'las encinas 930',
    status : 'dead',
}

for(propiedadMichito in michito){
    console.log(michito[propiedadMichito])
}

//json stringify

let michitoString = JSON.stringify(michito);

console.log(michitoString)