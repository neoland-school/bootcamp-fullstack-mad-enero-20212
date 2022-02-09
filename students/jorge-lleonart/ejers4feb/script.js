// 1- Crear una clase que represente un perro (nombre, edad, numero de patas, color, hacerSonido()).

// class Dog {
//     constructor(name,age,legs,color,sound){
//         this.name = name;
//         this.age = age;
//         this.legs = legs;
//         this.color =color;
//         this.sound = sound
//     }
//     animalSound(){
//         return this.sound
//     };
// }



//2- Crear una clase que represente un gato (nombre, edad, numero de patas, color, hacerSonido())



// class Cat {
//     constructor(name,age,legs,color,sound){
//         this.name = name;
//         this.age = age;
//         this.legs = legs;
//         this.color =color;
//         this.sound = sound
//     }
//     animalSound(){
//         return console.log(this.sound)
//     };
// }

// 3- Crear un objeto de cada clase e imprimir el sonido que hace.

// const firulais = new Dog('firulais',13,4,'brown','guau');
// const michi = new Cat('michi',10,4,'brown','miau');

// console.log(firulais.animalSound())
// console.log(michi.animalSound())

// michi.animalSound();
// firulais.animalSound();

// 4- Vamos a crear una clase que represente a un animal. (nombre, edad, numero de patas, color, hacerSonido())

// class Animal {
//     constructor(name,age,legs,color,sound){
//         this.name = name;
//         this.age = age;
//         this.legs = legs;
//         this.color =color;
//         this.sound = sound
//     }
//     animalSound(){
//         return console.log(this.sound);
//     };
// }

// class Cat extends Animal {
//     constructor(name,age,legs,color,sound){
//         super(name,age,legs,color,sound);     
//     }
//     animalSound(){
//         return console.log(this.sound);
//     };
// }

// class Dog extends Animal {
//     constructor(name,age,legs,color,sound){
//         super(name,age,legs,color,sound);     
//     }
//     animalSound(){
//         return console.log(this.sound);
//     };
// }

// const firulais = new Dog('firulais',13,4,'brown','guau');
// const michi = new Cat('michi',10,4,'brown','miau');

// michi.animalSound();
// firulais.animalSound();

// // 5- Vamos a crear la clase vaca que hereda de animal y que agregue otro parámetro que sea "tipo", sobrescribe el método hacerSonido() por el sonido de la vaca , crea un objeto de la clase vaca y muestra por consola el sonido.

// class Cow extends Animal {
//     constructor(name,age,legs,color,sound,type){
//         super(name,age,legs,color,sound); 
//         this.type = type;    
//     }
//     animalSound(){
//         return console.log(this.sound);
//     };
// }

// const roberta = new Cow('robrerta',13,4,'white','muu','rumiante');

// roberta.animalSound();


// // 6- Vamos a crear la clase koala que hereda de animal y agrega un método extra que sea saludarAnimal() que devuelve un string que diga `Hola soy el koala ... y tengo ... años`, crea un objeto de la clase Koala y muéstralo por consola.

// class Koala extends Animal {
//     constructor(name,age,legs,color,sound){
//         super(name,age,legs,color,sound);   
//     }
//     animalSound(){
//         return console.log(this.sound);
//     };
//     saludarAnimal(){
//         return console.log(`Hola soy el koala ${this.name} y tengo ${this.age} años`);
//     };
// }

// const juanito = new Koala('Juanito',13,4,'white','hey','pajaro');

// juanito.saludarAnimal();


// // 7- Crear un clase que represente a un círculo. tendrá la propiedad radio y color y como métodos tendremos calcularArea y calcularPerimetro.

// class Circle {
//     constructor(radio,color){
//         this.radio=radio;
//         this.color=color;
//     }
//     areaCalc(){
//         console.log(`The area is: ${Math.PI*(this.radio)^2}`);
//     }
//     perimeterCalc(){
//         console.log(`The perimeter is: ${Math.PI*this.radio*2}`);
//     }
// };

// const firstCircle = new Circle(5, 'red');
// firstCircle.areaCalc();
// firstCircle.perimeterCalc();


// // 7b- Crear dos círculos uno con radio 2cm y otro con radio de 15cm. Crear una función en JS que dado un Circulo como parámetro de entrada, pinte el círculo con la dimensión real en el HTML. Además este círculo tiene que  tener una animación infinita de rotado sobre el eje Y

// const secondCircle = new Circle(2, 'red');
// const thirdCircle = new Circle(15, 'green');

// function drawCircle(circle){
//     let drawedCircle = document.createElement('div');
//     document.body.appendChild(drawedCircle)
//     drawedCircle.classList.add('css_circulo')
//     drawedCircle.style = `background-color:${ circle.color}; border-radius: 50%; width:${circle.radio}cm; height:${circle.radio}cm;`;
// };

// drawCircle(secondCircle);


// 1-Crea una clase de tipo producto que contenga nombre, imagen  y precio.

class Product {
    constructor(name,img,price){
        this.name = name;
        this.img = img;
        this.price = price;
    }
}

//2- luego crea varios productos de la clase Producto.

const boniatos = new Product('boniatos', 'https://okdiario.com/img/recetas/2016/03/boniato.jpg', 25);

const patatas = new Product('patatas', 'https://ep01.epimg.net/elcomidista/imagenes/2017/02/22/articulo/1487804099_363696_1487804800_sumario_normal.jpg', 15);

const bike = new Product('bike', 'https://cdn.brujulabike.com/media/4482/conversions/bicis-mas-caras-1000.jpg', 150);


// 3- Crea una clase de carrito de compra que va a contener, una array de los productos,  un precio total,  el descuento, la cuenta global, y un método de agregar productos el cual sumara productos al array e ira sumando al precio total.

class Carrito {
    constructor(){
        this.products = [];
        this.priceTotal = 0;
        this.discount = 0;
        this.acount = this.price-this.discount;
    }
    add(obj){
        this.products.push(obj)
        this.priceTotal+=obj.price
    };
    products1(){
        this.products.forEach(e => {
            let divProduct = document.createElement('div');
            document.body.appendChild(divProduct);
            divProduct.classList.add('product-card');
            let nameProduct = document.createElement('h2');
            document.divProduct.appendChild(nameProduct);
            let imageProduct = document.createElement('img');
            document.divProduct.appendChild(imageProduct);
            let priceProduct = document.createElement('h2');
            document.divProduct.appendChild(priceProduct);

            console.log(e);
        });
    }
};

// 4- Pinta por pantalla un carrito de compra con los productos que vayas agregando, el diseño será libre aquí unos ejemplos
// let productos =[boniatos,patatas,bike]
let shopping = new Carrito ();
shopping.add(boniatos);
shopping.add(patatas);
shopping.products1();




