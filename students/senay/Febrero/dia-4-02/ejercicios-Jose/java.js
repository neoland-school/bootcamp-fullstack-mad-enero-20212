/**
 * 
Jose Tovar  15:09
1-Crea una clase de tipo producto que contenga nombre, imagen  y precio.
2- luego crea varios productos de la clase Producto.
3- Crea una clase de carrito de compra que va a contener, una array de los productos,  un precio total,  
el descuento, la cuenta global, y un método de agregar productos el cual sumara productos al array e ira 
sumando al precio total.
4- Pinta por pantalla un carrito de compra con los productos que vayas agregando, el diseño será libre 
aquí unos ejemplos
5- La clase debe tener un método que cada vez que compres tres productos deberás obtener uno gratis, así 
que si compras tres teléfonos pagaras 3 y deberás tener 4, si compras 4 teléfonos solo pagaras 3, si 
compras 8 teléfonos solo pagaras 6, cambiando el precio total.
 */

class Product {
    constructor(name, image, price) {
        this.name = name;
        this.image = image;
        this.price = price;
    }
};


/**
 * 2- luego crea varios productos de la clase Producto.
 */
const tv = new Product('LG SMART TV 32, img, 218');
const game = new Product('LEGO', img, 33);
const ipad = new Product('IPAD MINI', img, 150);
const bici = new Product('BICICLETA', img, 459);
const shoes = new Product('ZAPATILLAS ADDIDAS', img, 136);

/**
 * 3- Crea una clase de carrito de compra que va a contener, una array de los productos,  un precio total,  
el descuento, la cuenta global, y un método de agregar productos el cual sumara productos al array e ira 
sumando al precio total.
 */

class ShoppingCart {
    constructor() {
        this.products = [];
        this.totalPrice = 0;
        this.discount = 0;
        this.totalAmount = this.totalPrice - this.discount;
    }

}