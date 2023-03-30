// && = and regresa true si ambos son true
let a = 15;
let valorMinimo = 0, valorMaximo = 10;

if (a >= valorMinimo && a <= valorMaximo){
    console.log("dentro del rango");
}
else{
    console.log("fuera de rango");
}

//ejemplo de or(||) regresa true si uno de los operandos sea true
let vacaciones = true; diaDescanso = false;
if(vacaciones|| diaDescanso){
    console.log("puede asistir al juego del hijo");
}
else{
    console.log("padre esta ocupado");
}
