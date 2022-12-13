'use.strict';

/* 1- Crear una clase que represente un perro (nombre, edad, numero de patas, color, hacerSonido()).*/
/* 
class Dog {
    constructor(name,age,legs,color) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.color = color;
    }

    sound() {
        return 'wow'
    }
} */

/*
2- Crear una clase que represente un gato (nombre, edad, numero de patas, color, hacerSonido())*/

/* class Cat {
    constructor(name, age, legs, color, ) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.color = color;
    }

    sound() {
        return 'miow'
    }
} */


/*
3- Crear un objeto de cada clase e imprimir el sonido que hace.*/

/* const Bilbo = new Dog('Bilbo', 6, 4, 'brown');
const Mika = new Cat('Mika', 17, 4, 'black');

console.log(Bilbo.sound());
console.log(Mika.sound()); */

/*
4- Vamos a crear una clase que represente a un animal. (nombre, edad, numero de patas, color, hacerSonido())*/

/* class Animal {

    constructor(name, age, legs, color,) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.color = color;
    }

    sound(someSound) {
        return someSound;
    }

} */

/*
5- Vamos a crear la clase vaca que hereda de animal y que agregue otro parámetro que sea "tipo", sobrescribe el método hacerSonido() por el sonido de la vaca , crea un objeto de la clase vaca y muestra por consola el sonido. */
/* 
class Cow extends Animal{
    constructor(name, age, legs, color,type) {
        super(name, age, legs, color);

        this.type=type
    }

    sound(){
    return 'muuu'}
          
}

const pepi = new Cow('Pepi', 2, 4, 'white', 'milk');
console.log(pepi.sound) */


/*
6- Vamos a crear la clase koala que hereda de animal y agrega un método extra que sea saludarAnimal() que devuelve un string que diga `Hola soy el koala ... y tengo ... años`, crea un objeto de la clase Koala y muéstralo por consola.*/

/* class Koala extends Animal{
    constructor(name, age, legs, color){
        super(name, age, legs, color)
       
    }
    helloAnimal(){
        return `Hola soy el koala ${this.name} y tengo ${this.age} años`
    }
}

const koali = new Koala('Koali',5,2,'grey')

console.log(koali.helloAnimal()) */



/*
7- Crear un clase que represente a un círculo. tendrá la propiedad radio y color y como métodos tendremos calcularArea y calcularPerimetro. Crear dos círculos uno con radio 2cm y otro con radio de 15cm. Crear una función en JS que dado un Circulo como parámetro de entrada, pinte el círculo con la dimensión real en el HTML. Además este círculo tiene que  tener una animación infinita de rotado sobre el eje Y*/

/* 
class Circle {
    constructor(radio, color) {
        this.radio = radio;
        this.color = color;
    }

    CalculateArea(){
    return Math.PI*Math.pow(this.radio,2)}

    CalculatePerimeter(){
    return 2*Math.PI*this.radio}

}

const cOne = new Circle(2, 'blue');
const cTwo = new Circle(15, 'red');




function createCircles(obj){
    const divC = document.createElement('div');
     
    divC.style.width=`${2*obj.radio}cm`;
    divC.style.height=`${2*obj.radio}cm`;
    divC.style.height=`${2*obj.radio}cm`;
    divC.style.backgroundColor=`${obj.color}`;
    divC.style.borderRadius=`50%`;
    divC.className = 'css_circulo'
    document.body.appendChild(divC)

return divC
}

createCircles(cOne) */


/* 1-Crea una clase de tipo producto que contenga nombre, imagen  y precio.*/


class Product {
    constructor(name, img, price) {
        this.name = name;
        this.img = img;
        this.price = price
    }
}


/*2- luego crea varios productos de la clase Producto.*/


const shirt = new Product('shirt', 'https://m.media-amazon.com/images/I/61NEefBpINL._AC_UX385_.jpg', 20);

const jeans = new Product('jeans', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6Y_emjtNiPKZW4WyoiaxejBHHS4Ngdeejscimo6k-RlnFJfbPs04lKTyssrUJOKNdA0&usqp=CAU', 35);

const jacket = new Product('jacket', 'https://www.plein.com/dw/image/v2/BBKQ_PRD/on/demandware.static/-/Sites-plein-master-catalog/default/dwd79b4722/images/large/A17C-MLB0255-PLE046C_02_sf.jpg?sw=603&sh=768', 45);

const shoes = new Product('shoes', 'https://res.cloudinary.com/atoms-shoes/image/upload/c_scale,w_1400,q_auto,f_auto/v1622733115/products/shoes/model000/black-white_profile', 30);


/*
3- Crea una clase de carrito de compra que va a contener, una array de los productos,  un precio total,  el descuento, la cuenta global, y un método de agregar productos el cual sumara productos al array e ira sumando al precio total.*/

class Carrito {
    constructor() {
        this.products = [];
        this.total = 0;
        this.disc = 0;
        this.pNum = 0;
    }

    agregar(obj) {
        this.products.push(obj)
        this.total += obj.price
        this.pNum++
    }

}

/*
4- Pinta por pantalla un carrito de compra con los productos que vayas agregando, el diseño será libre aquí unos ejemplos*/

const carr = new Carrito()


carr.agregar(jacket);
carr.agregar(jeans);
carr.agregar(shirt);
carr.agregar(shoes)

console.log(carr)

//container
document.body.className = 'container'

//header
const header = document.createElement('header');
header.className = 'header_style';
document.body.appendChild(header);

// interior del header
const pCarrito = document.createElement('p');
pCarrito.textContent = 'CARRITO'
header.appendChild(pCarrito);

const pTotal = document.createElement('p');
pTotal.textContent = `Total: ${carr.total}€`;
pTotal.className = 'total'
header.appendChild(pTotal);

const nArticles = document.createElement('p');
nArticles.textContent = `Artículos: ${carr.pNum}`;
nArticles.className = 'articles'
header.appendChild(nArticles);



function pintarCarrito(obj) {



    obj.products.forEach( v => {
        //card
        const card = document.createElement('div');
        card.className = 'card_producto';
        document.body.appendChild(card);


        // titulo
        const title = document.createElement('h2');
        title.className = 'titulo';
        title.textContent = `${v.name}`
        card.appendChild(title)

        //imagen
        const image = document.createElement('img');
        image.src = `${v.img}`
        image.className = 'imagen';
        card.appendChild(image)

        //precio
        const price = document.createElement('p');
        price.className = 'precio';
        price.textContent = `${v.price}€`;
        card.appendChild(price)
    });



    return card
}


pintarCarrito(carr)



/*
5- La clase debe tener un método que cada vez que compres tres productos deberás obtener uno gratis, así que si compras tres teléfonos pagaras 3 y deberás tener 4, si compras 4 teléfonos solo pagaras 3, si compras 8 teléfonos solo pagaras 6, cambiando el precio total. */