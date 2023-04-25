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
        return `idProducto: ${this._idproducto}, nombre: ${this._nombre}, precio: $${this._precio} `
    }
}


class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){

        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];//asi se entiende que puede recibir elementos en el array vacio
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto;
        }
        else{
            console.log('no se pueden agregar más productos');
        }

    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;     // totalVenta = totalVenta + producto.precio
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = ' ';
        for (let producto of this._productos){
            productosOrden +='\n{' + producto.toString() + '} ';
        }

        console.log(`Orden: ${this.idOrden} Total: ${this.calcularTotal()}, Productos : ${productosOrden}`);
    }
}





let producto1 = new Producto('Carne de soya', 2500);
let producto2 = new Producto('Tofu', 4500);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto('gluten',4600);
let producto4 = new Producto('leche de soya',1490);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto4);
orden2.mostrarOrden();

let orden3 = new Orden();
let producto5 =new Producto('queso crema', 2500);
let producto6 =new Producto('not burger', 5500);
orden3.agregarProducto(producto1);
orden3.agregarProducto(producto2);
orden3.agregarProducto(producto5);
orden3.agregarProducto(producto6);
orden3.agregarProducto(producto4);
orden3.mostrarOrden();

















