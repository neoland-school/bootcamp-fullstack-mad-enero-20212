// // 1- Crear una clase que represente un perro (nombre, edad, numero de patas, color, hacerSonido()).
// // 4- Vamos a crear una clase que represente a un animal. (nombre, edad, numero de patas, color, hacerSonido())

// class Animal {
//     constructor(name, age, legs, color,sound){
//         this.name=name;
//         this.age=age;
//         this.legs=legs;
//         this.color=color
//         this.sound=sound;
        
//     }

//     animalSound(){
//         return console.log (this.sound)
//     }

// }

// class Dog extends Animal {
//     constructor(name, age, legs,color,sound){
//         super (name, age, legs,color,sound)
//         // this.name=name;
//         // this.age=age;
//         // this.legs=legs;
//         // this.color=color;
//         // this.sound=sound;
    

//     }
//     animalSound(){
//         return console.log(this.sound)
//     }

// }

// // 2- Crear una clase que represente un gato (nombre, edad, numero de patas, color, hacerSonido())

// class Cat extends Animal { 
//     constructor(name, age, legs,color,sound){
//         super (name, age, legs,color,sound)
//         // this.name=name;
//         // this.age=age;
//         // this.legs=legs;
//         // this.color=color;
//         // this.sound=sound;

//     }
//     animalSound(){
//         console.log(this.sound)
//     }

// }


// // 3- Crear un objeto de cada clase e imprimir el sonido que hace.

// const whiskey = new Dog ('whiskey', 2, 4, 'brown', 'guau');
// whiskey.animalSound()

// const michi = new Cat ('michi', 2, 4, 'black', 'miau');
// michi.animalSound()


// // 5- Vamos a crear la clase vaca que hereda de animal y que agregue otro parámetro que sea "tipo", sobrescribe el método hacerSonido() por el sonido de la vaca , crea un objeto de la clase vaca y muestra por consola el sonido.


// class Cow extends Animal{ 
//     constructor(name, age, legs,color,sound, type){
//         super (name, age, legs,color,sound)
//         this.type=type

//     }
//     animalSound(){
//         console.log(this.sound)
//     }

// }


// const LaVacaQueRíe= new Cow('la vaca que ríe',4,4, 'brown and white','mu', 'mamifero')
// console.log(LaVacaQueRíe.sound)



// // 6- Vamos a crear la clase koala que hereda de animal y agrega un método extra que sea saludarAnimal() que devuelve un string que diga `Hola soy el koala ... y tengo ... años`, crea un objeto de la clase Koala y muéstralo por consola.


// class Koala extends Animal{
//     constructor(name, age, legs,color,sound, type){
//         super (name, age, legs,color,sound)
//         this.type=type

//     }
//     animalSound(){
//         console.log(this.sound)
//     }
//     saludarAnimal(){
//         return console.log(`Hola soy el Koala ${this.name} y tengo ${this.age} años`)
//     }
// }
// const Pepito = new Koala ('Pepito', 3,4,'grey')
// Pepito.saludarAnimal()

// // 7.- Crear un clase que represente a un círculo. tendrá la propiedad radio y color y como métodos tendremos calcularArea y calcularPerimetro

// class Circle{
//     constructor(radio, color){
//         this.radio=radio;
//         this.color=color;

//     }
//     AreaCalculator(){
//         return console.log(this.radio*this.radio*Math.PI)

//     }
//     PerimeterCalculator(){
//         return console.log( 2*Math. PI*this.radio)

//     }
    
// }
// // 7.b)Crear dos círculos uno con radio 2cm y otro con radio de 15cm. Crear una función en JS que dado un Circulo como parámetro de entrada, pinte el círculo con la dimensión real en el HTML. Además este círculo tiene que  tener una animación infinita de rotado sobre el eje Y

// const Circle1 = new Circle (2, 'red')
// Circle1.AreaCalculator()
// const Circle2 = new Circle (15, 'green')

// function circlePaint(obj){
//     let circ1= document.createElement('div')
//     document.body.appendChild(circ1)
//     circ1.classList.add('CircleOne')
//     circ1.style=`background-color: ${obj.color}; width: ${obj.radio}cm; height: ${obj.radio}cm; border-radius: 50% ; transform: rotateY(360deg); `
//     circ1.id='rotated'

// }

// circlePaint(Circle1)
// circlePaint(Circle2)

// 1.JOSE 1-Crea una clase de tipo producto que contenga nombre, imagen  y precio.


class Product{
    constructor(name,image,price){
        this.name=name;
        this.image=image;
        this.price=price;
    }


}

// 2- luego crea varios productos de la clase Producto.

const potato= new Product('potato', 'https://petitfitbycris.com/wp-content/uploads/2019/01/patatas-foto.jpg', 3)
const bike= new Product( 'bike', 'https://www.bicispina.com/9872-large_default_2x/bicicleta-megamo-26-trivia.jpg', 230)
const skate = new Product( 'skate', ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVV_fyNSZXx18LDViPi87n4gH1FzX2bNOE3MdQYFe9DR2gjBfYpYsGd9osqRk1tiF_hXE&usqp=CAU', 91)


// 3- Crea una clase de carrito de compra que va a contener, una array de los productos,  un precio total,  el descuento, la cuenta global, y un método de agregar productos el cual sumara productos al array e ira sumando al precio total.

class Carrito {
    constructor(){
        this.products= [];
        this.totalPrice=0;
        this.discount=0;
        this.totalBill=this.totalPrice-this.discount;
    }

    addProducts(obj){
        this.products.push(obj)
        this.totalPrice+=obj.price

    }
    // 4- Pinta por pantalla un carrito de compra con los productos que vayas agregando, el diseño será libre aquí unos ejemplos

    printShop(){ 
        this.products.forEach(element => {
            let divProduct= document.createElement ('div')
            document.body.appendChild(divProduct)
            divProduct.classList.add('classProductsCard')

            let nameProduct= document.createElement ('h2')
            divProduct.appendChild(nameProduct)

            let imageProduct= document.createElement ('img')
            divProduct.appendChild(imageProduct)
            imageProduct.classList.add('classImageProduct')
            











            
        });
    }

}



let miCarrito= new Carrito ();


miCarrito.addProducts(skate);
miCarrito.addProducts(bike);
miCarrito.addProducts(potato);

miCarrito.printShop()

console.log(miCarrito.products)
