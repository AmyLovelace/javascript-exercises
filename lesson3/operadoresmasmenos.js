//operadores de incremento 
let a = 3, b =2;
let z = a + b;

//incremento
// pre-incremento(el operador ++ antes de la variable)
z = ++a;
console.log(a);//4
console.log(z);//4


// post-incremento(el operador ++ despues de la variable)

z =b++;// primero b le asigna el valor a z (2) y despues de le incrementa ++ 1
console.log(b);//3 
console.log(z);//2

//decremento
// pre-decremento(el operador ++ antes de la variable)
z = --a;//primero se decrementa en 1 y despues se le asigna el valor a z 
console.log(a);//3
console.log(z);//3


// post-decremento(el operador ++ despues de la variable)

z =b--;//primero b le asigna el valor a z (3) y despues de le decrementa 1
console.log(b);//2 
console.log(z);//3
