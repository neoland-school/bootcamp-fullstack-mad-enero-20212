# Programación Orientada a Objetos

## Entendiento el concepto del this en JS

El `this` en JS es un objeto que existe en el lenguaje y que representa el contexto donde nos encontramos.

En función de donde utilicemos el this, este tendrá una valor y otro valor.

Es una variable a la que nosotros no podemos darle valor, sino que lo hace el propio lenguaje de programación. Como todo objeto tendrá sus propiedades de diferentes tipos (strings, booleans, objects, functions, ...)

### En que situaciones (contextos) podemos utilizar el this y que valor tiene

```js
// cuando lo utilizamos en un archivo fuera de cualquier función
this; // === Al objeto global de JS. En el navegador es el window.

// usandolo dentro de una función
function myFun(){
    this; // ??? En este caso this obtiene su valor del contexto de la funcion. Si la funcion es global obtiene el mismo valor que el this global, es decir `window`
}

// usándolo dentro de un objeto

let obj = {
    a: 3,
    addOne: function(){
        this.a +=1; // ?? Dentro de un objeto, this tiene el valor del objeto que lo engloba. En este caso this === {a:3, addOne: function....}. Es muy utill para acceder a propiedades del objeto dentro de las funciones del mismo objeto

        function b(){
            this; // en este caso el this tmbien es el objeto, ya que tiene el mismo valor que la funcion a la que pertenece
        }
    },
    other: () => {
        this.a; // En las arrow function siempre tienen su valor del objeto global, NO obtienen el valor del objeto al que pertenecen. En este caso this.a sería undefined
    }

}
obj.a;// ===> vale 3
obj.addOne();
obj.a; // ===> vale 4
this.a; // ==> undefined

// Ejemplo

const car = {
    stop: function(){
        this.isOn = false;
    },
    brand: 'Seat',
    plate: '1234AAA',
    isOn: false,
    start: function(){
        this.isOn = true;
        this.stop(); // si quisiese podría llamar a una funcion del objeto
        this.brand.toUpperCase(); // hago cosas de strings en las propiedades que son strings
        this.isOn.toLowerCase(); // esto petará muchisimo porque toLowerCase no es una function de los booleans
    }
}; 

// Ejemplo un pelín mas complejo

const student = {
    name: 'Un Nombre',
    surname: 'Un apellido',
    contact: {
        phone: '+34666666666',
        name: 'AAMama',
        call: function(){
            this; // ??? Obtiene su valor, del objeto al que pertenece, portanto, es lo mismo que contact
            callPhoneNumber(this.phone); // Llamo a una funcion imaginaria que realiza llamadas a numeros de telefono, pasandole un número de telefono
        }
    },
    exit: function(){
        this; // ?? this es === student.
        this.contact.call(); // puedo acceder a cualquier propiedad de student
    }

}

```

### Intento de arraglar el lio del this. `use strict`

El modo estricto, se introduce en la versión 5 de JavaScript e intenta corregir varios errores y problems del Lenguaje.

Para poner el modo estricto en nuestro JS, la forma más sencila es escribir `'use strict';` al principio de cualquier archivo JS de nues web.

```js
'use strict';

a=3; // con use strict produce un error en la consola. Siempre tendremos que poner let o const para declarar una variable

function myFn() {
    this; // al tener modo estricto, las funciones globales, this === undefined
}

```

[Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

## Introduccion a POO (OOP)

El paradigma consiste en:

1. Definir la estructura de caraterísticas y acciones que yo puedo realizar sobre una entidad en mi aplicación. (EJ: Entidades: Perros, Coches, Vehiculos, Figuras). A esta definición se le conoce como `Clase`.

2. Una vez he definido como debe ser mi entidad, es decir, como deben ser TODOS Coches en mi aplicación, ahora puedo crear individuos concretos con valores concretos. A esto se le conoce como `Objeto` (instancia o individuo de una clase).

La programación orientada a objetos se defiende 4 principios básicos:

- **Encapsulación**: Envolver la definición de una entidad y que nadie externo pueda modificar esa definición.

- **Abstracción**: Intenta ocultar el detalle de implementación y estructura de una entidad. EJ: Imagenmos que tenemos una entidad(clase) coche que tiene un método arrancar. Como desarrollador de objetos de coche, No tengo que conocer como arrancar un coche ya que la clase lo hace por mi, solo tengo que llamar a la función coche.

- **Herencia**: Es obtención de propiedades y métodos por parte de otro clase (considerada como clase padre)

- **Polimorfismo**: Es la capacidad de una clase de tener diferentes tipos o de ser de diferentes clases.
    EJ: Tengo una clase Animal, Creo dos clases que heredan de la clase Animal, Una es Gato y otra es Perro, Persona.

    Yo puedo tener un array de Perros -> y esto tendrá las características de los Perros y además la de los Animales.

    ¿Puedo tener una array de Animales? --> [Perro, Perro, Gato, Persona] --> Un array de animales que tienen diferentes formas. Algunos animales son Perros, otros son Gatos y otros son Personas.

### Sintaxis

¿Como defino una clase?

```js

// Developer que crea y define la clase. Los nombres de clases tienen una notación `CamelCase`

class Animal {
    // Todo lo que hay aqui dentro es la definición de la clase

    constructor(name = 'Sin identificar' , legs = 0){
        // esta es una función especial que se va a auto ejecutar, cuando creemos un objeto de esta clase. Se utiliza para inicializar propiedades
        this; // el this en una clase tiene el valor del objeto que se ha creado de la misma, en cualquier método de la clase. Utilizaremos el this para crear las propiedades de la clase

        this.name = 'Alex'; // aqui estaría creando una propiedad name a los objetos que se creen de esta clase cuyo valor siempre será Alex.

        // ¿Como puede un desarrollador que cree un animal, darle el nombre que quiera y que no siempre sea Alex?
        this.name = name; //  en este caso asignamos a la propiedad name de la clase el primer parámetro que introduzca el desarrollador al crear el objeto
        this.legs = legs;
        this.isAlive = true; // inicialmente todos los animales están vivos

    }

    death(){
        // aqui dentro puedo poner el código que haga que un animal muera
        this.isAlive = false; // esto signica en nuestro que el animal está muerto
    }

    isAlive(){ // es una función que me dice si mi animal está muerto o no
        return this.isAlive;
    }

    changeName(newName){
        // puedo pasar parámetros de entrada.
        this.name = newName; // cambio el nombre a lo que me diga quien haya creado el objeto
    }
    
}

// ¿Como creo un objeto real de Animal?

const bobby = new Animal('Bobby', 3); // principio de encapsulacion. Tengo un objeto cuya estructura está en una cápsula llamada clase y no tengo que definirla yo al crear el objeto

/* Crear un objeto de tipo Animal (con todas sus carácterísticas y funciones) cuyo nombre es Bobby. A partir de aqui puedo tratar la variable bobby como un objeto. Este objeto que tendrá:
    bobby = {
        name: 'Bobby',
        isAlive: true,
        death: ... de tipo function,
        isAlive: ... de tipo function,
        changeName: ... de tipo function
    }
*/

bobby.name; // devuelve el nombre de bobby
// Ejemplos del principio de abstracción. Me da igual como se tenga que morir un animal, lo que se es que si llamo a morir, el animal deja de estar vivo
bobby.isAlive(); // devuelve true
bobby.death(); // devuelve undefined
bobby.isAlive(); //  devolverá false


// Ejemplo de herencia (3 principio)

class Dog extends Animal { // esto permite que la clase perro herede propiedades y métodos del Animal

    constructor(name, weight){
        super(name, 4); // esto realiza una llamada al constructor de la clase que heredo. Siempre se tiene que llamar como primera instruccion del constructor, aunque no haya parámetros de entrada en la clase padre.
        this.weigth = weigth;
    }

    bark(){ // function que hace al perro ladrar
        return 'Guau Guau';
    }

}

// ahora quiero un perro
const tobby = new Dog('Tobby', 13); 
/* esto me va a crear un Perro con la siguiente estructura 

   tobby = {
       weight: 13,
       bark: ... de tipo function,
       // También tendríamos la propiedades de Animal
       name: 'Tobby',
       isAlive: true,
       death: ... de tipo function,
       isAlive: ... de tipo function,
       changeName: ... de tipo function
   }
*/
tobby.bark(); // devuelve un string 'Guau Guau!'
tobby.changeName('Tobby el humilde'); // a partir de aqui tobby.name !== 'Tobby', es 'Tobby el humilde'
tobby.death(); // matamos a tobby :(


```
