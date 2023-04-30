// setinterval manda a llamar la funcion callback cada  ciertos segundos a diferencia de la settimeout 

let reloj = () => {
    let fecha = new Date ();
    console.log (`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj,1000);//cada un segundo







