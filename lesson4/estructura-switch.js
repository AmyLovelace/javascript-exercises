let numero = 4;
let numeroTexto = 'valor desconocido';

switch(numero){
    case 1:
        numeroTexto ='numero uno';
        break;
    case 2:
        numeroTexto = 'numero dos';
        break;
    case 3:
        numeroTexto = 'numero tres';
        break
    case 4:
        numeroTexto = 'numero cuatro';
        break
    default:
        numeroTexto = 'caso no encontrado'; 
}
console.log(numeroTexto)