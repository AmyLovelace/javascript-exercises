let mes =12;
let estacion;

if(mes==1 || mes == 2 || mes == 12){
    estacion = "verano";
}
else if(mes == 3 || mes == 4 || mes == 5){
    estacion = "otoño";
}
else if (mes == 6 || mes==7|| mes == 8){
    estacion="invierno";
}
else if (mes == 9|| mes == 10 || mes == 11){

    estacion="primavera";

}
console.log(estacion);