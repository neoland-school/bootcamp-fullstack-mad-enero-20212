// EJERCICIO 1 //
class Dog {
    constructor(name, age, dog_paws = 4, color) {
        this.name = name;
        this.age = age;
        this.dog_paws = dog_paws
        this.color = color;
    }

    talkDog(){
        console.log('Guau guau');
    }
}


// EJERCICIO 2 //
class Cat {
    constructor(name, age, dog_paws = 4, color) {
        this.name = name;
        this.age = age;
        this.dog_paws = dog_paws
        this.color = color;
    }

    talkCat(){
        console.log('Miau miau');
    }
}


// EJERCICIO 3 //
const tyrion = new Dog ('Tyrion', 3, 4, 'brown-white');

console.log(tyrion);

const misi = new Cat ('Misi', 2, 4,'black');

console.log(misi);


// EJERCICIO 4 //
class Animal {
    constructor(name, age, color, paws) {
        this.name = name;
        this.age = age;
        this.paws = paws
        this.color = color;
    }
    talkAnimal(sound) {
        console.log(sound);
    }
};

// EJERCICIO 5 //
class Vaca extends Animal {
    constructor(type, name, age, color, paws = 4) {
        super(name, age, color, paws);
        this.type = type;
    }
    talkAnimal(){
        return 'muuuuu';
    }
};

const vaca_lechera = new Vaca('lechera', 'one', 2, 'black and white', 4);

console.log(vaca_lechera.talkAnimal());

// EJERCICIO 6 //
class Koala extends Animal {
    constructor(name, age, color, paws) {
    super(name, age, color, paws);
    }
    saludarAnimal() {
        return `Hola, soy el koala ${this.name} y tengo ${this.age} años.`;
    }
}

const koalaPedro = new Koala('Pedro', 4, 'black', 2);

console.log(koalaPedro.saludarAnimal());

// EJERCICIO 7 //
class Circle {
    constructor(radio, color) {
        this.radio = radio;
        this.color = color;
    };
    carcularArea(){
        return ((Math.pow(this.radio,2))*Math.PI)
    };
    calcularPerimetro(){
        return (2*(Math.PI)*this.radio)
    };
}

const circle1 = new Circle(2, 'red');
const circle2 = new Circle(15, 'green');

console.log(circle1.carcularArea());
console.log(circle2.calcularPerimetro());

/*
var c = document.getElementById("myCanvas");

function imprimirCircule(circ) {
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 70, circ.radio, 0,  2* Math.PI);
    ctx.stroke();
     
    
}
*/
function imprimirCircule(circ) {

    let ancho = circ.radio;
    let alto = circ.radio;

    let div_circle = document.createElement('div');
    div_circle.style = `background-color: ${circ.color}; width: ${circ.radio}cm; height: ${circ.radio}cm; border-radius: 50%;`;
    div_circle.setAttribute('id','rotated')
    
    document.body.appendChild(div_circle);
}


imprimirCircule(circle1);
imprimirCircule(circle2);
