


//Crear una clase que represente un perro (nombre, edad, numero de patas, color, hacerSonido()).

class Dog{
    constructor(name,age,color){

    
    this.name = name
    this.age = age
    this.lengs = 4
    this.color = color

    }
sound(){
    return 'guau guau'
}

}


// Crear una clase que represente un gato (nombre, edad, numero de patas, color, hacerSonido())

class Cat{
    constructor(name,age,color){

    
    this.name = name
    this.age = age
    this.lengs = 4
    this.color = color

    }
sound(){
    return 'miau miau'
}

}


//3- Crear un objeto de cada clase e imprimir el sonido que hace.


const Yann = new Dog('Yann','8','Black and white');
const Misi = new Cat("Misi","5","black");

console.log(Yann.sound())
console.log(Misi.sound())


//4- Vamos a crear una clase que represente a un animal. (nombre, edad, numero de patas, color, hacerSonido())

class Animal{
    constructor(name,age,color,lengs){

    
    this.name = name
    this.age = age
    this.lengs = lengs
    this.color = color

    }
sound(){
    return 'all sounds'
}


}




//5- Vamos a crear la clase vaca que hereda de animal y que agregue otro parámetro que sea "tipo", 
//sobrescribe el método hacerSonido() por el sonido de la vaca , crea un objeto de la clase vaca y muestra por consola el sonido.


class Cow extends Animal{
    constructor(name,age,color,lengs,type){
    super(name,age,color,lengs);
    this.type = type
}
sound(){
    return' muu muu'

}
}

const Vac = new Cow('flora',2,'white',4,'mamal')

console.log(Vac.sound())

//6- Vamos a crear la clase koala que hereda de animal y agrega un método extra que sea saludarAnimal() 
//que devuelve un string que diga `Hola soy el koala ... y tengo ... años`, crea un objeto de la clase Koala y muéstralo por consola.

class Koala extends Animal{
    constructor(name,age,color,lengs){
    super(name,age,color,lengs)


    }
saludarAnimal(){
    return(`hola soy el koala ${k.name} y tengo ${k.age} años `)
}
}

const k = new Koala('kok',3,'grey',2);

console.log(k.saludarAnimal());



//7- Crear un clase que represente a un círculo. tendrá la propiedad radio y color y como métodos tendremos calcularArea y calcularPerimetro. 
//Crear dos círculos uno con radio 2cm y otro con radio de 15cm. Crear una función en JS que dado un Circulo como parámetro de entrada, pinte el círculo con la dimensión real en el HTML. 
//demás este círculo tiene que  tener una animación infinita de rotado sobre el eje Y


class Circle{
    constructor(radio,color){
    this.radio = radio
    this.color = color
}
CalArea(){
    return this.radio*this.radio*Math.PI
}
calPerimetro(){
    return (this.radio*Math.PI)*2
}

}

/*const c1 = new Circle(2,'grey');
console.log(c1.CalArea())
console.log(c1.calPerimetro())
const c2 = new Circle(15,'red');


function circulo(obj){
const Cs = document.createElement('div');
Cs.style = `background-color:${obj.color}; border-radius:50%; width:${obj.radio}cm;height:${obj.radio}cm;animation: infinite`;
Cs.classList.add('circulo1')
document.body.appendChild(Cs);

}

circulo(c1);
circulo(c2);

*/


// 1-Crea una clase de tipo producto que contenga nombre, imagen  y precio.

class Producto{
    constructor(name,img,price){
    this.name = name
    this.img = img
    this.price = price

}
}

//2- luego crea varios productos de la clase Producto.

const zapV = new Producto(
    'Vans','https://photos6.spartoo.es/photos/261/26185/26185_500_A.jpg',
80
)


const zapC = new Producto(
    'Converse','https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/toqshuuheqdl3ljzobnc/calzado-converse-chuck-taylor-all-star-de-perfil-alto-xX439O.png'
    ,90

)

const zapP = new Producto(
    'Puma','https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/383219/02/sv01/fnd/EEA/fmt/png'
    ,70
)




// 3 Crea una clase de carrito de compra que va a contener, una array de los productos,  un precio total,  el descuento, la cuenta global, y 
//un método de agregar productos el cual sumara productos al array e ira sumando al precio total.

class Carrito{
    constructor(){
        this.array=[]
        this.pricet=0
        this.discount=0
        this.account=0
    }
add(obj){
 this.array.push(obj) ;
 this.pricet +=obj.price;
crear(obj)

}


}

//4- Pinta por pantalla un carrito de compra con los productos que vayas agregando, el diseño será libre aquí unos ejemplos

/* Tengo que crear un input con un boton para que se haga la compra.
 crear el array  de objetos con las caracteristicas.
 crear un div y una lista? */


function crear(obj){
const div = document.createElement('div');
div.classList.add('elm')
let enlace =document.createElement('img');
enlace.classList.add('imagenes')
enlace.src =obj.img;
let icono =document.createElement('i');
icono.classList.add('icono');
icono.textContent=('🛒')
const p1 = document.createElement('p');
p1.classList.add('descripcion')
const p2 = document.createElement('p');
p2.classList.add('precio')
p1.textContent=`${obj.name}`
p2.textContent=`${obj.price}€`
document.body.appendChild(div);
div.appendChild(p1);
div.appendChild(p2);
div.appendChild(enlace);
div.appendChild(icono);
}


let compra = new Carrito();

compra.add(zapC);
compra.add(zapP);
compra.add(zapV);








