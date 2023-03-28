let a = 3, b = 2, c =1 , d=4;

let z = a * b + c / d;//se realiza la operacion de izq a dere osea a por b y el resultado se sumaria a c  
console.log(z);//6.25

z = c + a * b / d;// en este caso primero se realiza la multiplicacion de a +b y posteriormente se divide con d y al ultimo se suma a c
console.log(z);//2.5

//ocupar parentesis para cambiar la prioridad de las operaciones
z = (c + a) * b / c;// aqui se realiza primero el parentesis y posterior la multiplicacion y division
console.log(z);//8

