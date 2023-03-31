

/*
6am-11am -buenos dias
12pm-18pm buenas tardes 
19pm-24pm buenas noches
0am-6am durmiendo
*/

let horaDia =25;
let mensaje;

if(horaDia >= 6 && horaDia <=11){
    mensaje="Buenos Dias";
}
else if(horaDia >= 12 && horaDia <=18){
    mensaje="Buenas Tardes";
}
else if(horaDia >= 19 && horaDia <=24){
    mensaje="Buenas Noches";
}
else if(horaDia >= 0 && horaDia <=6){
    mensaje="shhh estoy durmiendo";
}
else{
    mensaje="esa hora no existe, recueda solo hay 24 horas en un dia"
}
console.log(mensaje)































