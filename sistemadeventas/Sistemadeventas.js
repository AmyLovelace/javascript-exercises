class Producto{

    static contadorproductos = 0;

    constructor(nombre,precio){

        this._idproducto = ++Producto.contadorproductos;
        this._nombre = nombre;
        this._precio = precio;

    }

    get idproducto(){
        return this._idproducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        return this._precio = precio;
    }

    toString(){
        return `idProducto:${this._idproducto}, nombre: ${this._nombre}, precio:$${this._precio} `
    }
}

let producto1 = new Producto('Carne de soya', 2500);
let producto2 = new Producto('Tofu', 4500);
console.log(producto1.toString());
console.log(producto2.toString());


















