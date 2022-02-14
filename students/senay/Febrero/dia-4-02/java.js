/**
 * 1- Crear una clase que represente un perro (nombre, edad, numero de patas, color, hacerSonido()).
2- Crear una clase que represente un gato (nombre, edad, numero de patas, color, hacerSonido())
3- Crear un objeto de cada clase e imprimir el sonido que hace.
4- Vamos a crear una clase que represente a un animal. (nombre, edad, numero de patas, color, 
    hacerSonido())
5- Vamos a crear la clase vaca que hereda de animal y que agregue otro parámetro que sea "tipo", 
sobrescribe el método hacerSonido() por el sonido de la vaca , crea un objeto de la clase vaca y 
muestra por consola el sonido.
6- Vamos a crear la clase koala que hereda de animal y agrega un método extra que sea saludarAnimal() 
que devuelve un string que diga `Hola soy el koala ... y tengo ... años`, crea un objeto de la clase 
Koala y muéstralo por consola.
7- Crear un clase que represente a un círculo. tendrá la propiedad radio y color y como métodos 
tendremos calcularArea y calcularPerimetro. Crear dos círculos uno con radio 2cm y otro con radio de 
15cm. Crear una función en JS que dado un Circulo como parámetro de entrada, pinte el círculo con la 
dimensión real en el HTML. Además este círculo tiene que  tener una animación infinita de rotado sobre 
el eje Y
 */

/**
 * 1- Crear una clase que represente un perro (nombre, edad, numero de patas, color, hacerSonido()).
 */

class AnimalPerro {
    constructor(nombre, edad, patas, color) {
        this.nombre = nombre;
        this.edad = edad;
        this.patas = patas;
        this.color = color;
    };
    sonidoPerro() {
        return 'Bau Bau';
    }

}
// console.log(AnimalPerro);

/**
 * 2- Crear una clase que represente un gato (nombre, edad, numero de patas, color, hacerSonido())
 */


class Gato {
    constructor(nombre, edad, patas, color) {
        this.nombre = nombre;
        this.edad = edad;
        this.patas = patas;
        this.color = color;
    };
    sonidoGato() {
        return 'Miau Miau';
    };
}
// console.log(Gato);


/**
 * 3 Crear un objeto de cada clase e imprimir el sonido que hace.
 */

const perri = new AnimalPerro('perri', 8, 4, 'azul');
// console.log(perri);

const gatito = new AnimalPerro('Sisi', 2, 4, 'negro');
// console.log(gatito);

/**
 * 4- Vamos a crear una clase que represente a un animal. (nombre, edad, numero de patas, color, 
    hacerSonido())
 */

class Panda {
    constructor(nombre, edad, patas, color) {
        this.nombre = nombre;
        this.edad = edad;
        this.patas = patas;
        this.color = color;
    }
    pandaSound() {
        return 'puum';
    }
}
// console.log(Panda);

/**
 * 5- Vamos a crear la clase vaca que hereda de animal y que agregue otro parámetro que sea "tipo", 
sobrescribe el método hacerSonido() por el sonido de la vaca , crea un objeto de la clase vaca y 
muestra por consola el sonido.
 */

class Vaca extends AnimalPerro {
    constructor(nombre, edad, patas, color, tipo) { // tipo es solo lo k vas a modificar/añadir
        super(nombre, edad, patas, color);
        this.tipo = tipo;
    };
    sonidoVaca() {
        return 'Muu Muu';
    };
};

// console.log(Vaca);


// 5b. crea un objeto de la clase vaca y muestra por consola el sonido.
const classVaca = new AnimalPerro('Po', 4, 4, 'negro y blanco');
// console.log(classVaca.sonidoPerro);


/**
 * 6- Vamos a crear la clase koala que hereda de animal y agrega un método extra que sea saludarAnimal() 
que devuelve un string que diga `Hola soy el koala ... y tengo ... años`, crea un objeto de la clase 
Koala y muéstralo por consola.
 */

class Koa extends AnimalPerro {
    constructor(nombre, edad, patas, color) {
        super(nombre, edad, patas, color)

    };
    saludarAnimal() {
        return `Hola soy el Koala ${this.nombre} y tengo ${this.edad}`
    }
}


const classKoala = new Koa('KoalaName', 222, 5, 'green');
// console.log(classKoala.saludarAnimal());

/**
 * 7- Crear un clase que represente a un círculo. tendrá la propiedad radio y color y como métodos 
tendremos calcularArea y calcularPerimetro. Crear dos círculos uno con radio 2cm y otro con radio de 
15cm. Crear una función en JS que dado un Circulo como parámetro de entrada, pinte el círculo con la 
dimensión real en el HTML. Además este círculo tiene que  tener una animación infinita de rotado sobre 
el eje Y
 */

// class circleCircle {
//     constructor(radio, color) {
//         this.radio = radio;
//         this.color = color;
//     };
//     calcularArea() {
//         return `${this.radio*2} * Math.PI`;
//     };
//     calcularPerimetro() {
//         return 2 * Math.PI * this.radio;
//     }

// }
/**
 * Crear dos círculos uno con radio 2cm y otro con radio de 15cm
 */
// const round1 = (2, 'green');
// console.log(round1);
// const round2 = (15, 'red');