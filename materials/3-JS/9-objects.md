# Objetos

Son un tipo de datos que nos sirve para representar entidades dentro de nuestro programa. Nos ayuda a agrupar en una única variable todas las propiedades de esa entidad.

## Sintaxis

### Creación de un objeto

```js
const obj = {};// esto es un objeto vacío, sin propiedades

const person = { // esto es un objeto con una propiedad/característica
    name: 'valor' // esto es una propiedad cuyo nombre es name y su valor es un string 
}

const person = { // esto sería un objeto con 2 propiedades
    name: 'Alex', // cada propiedad se separa por una ,
    edad: 18 // las propiedades pueden ser de cualquier tipo de datos que hemos visto, incluido funciones, arrays u otros objetos
}


const obj = { // se pueden combinar infinitamente los tipos de datos
    notas: [4,1,3,5,7],
    tutor: {
        name: 'El que sea',
        experience: 44
    },
    profesores: [
        {
            name: 'Uno',
            email: 'uno@uno.uno'
        },
        {
            name: 'Jose',
            email: 'Jose@Jose.dos'
        }
    ]
}

```

### Acceso al valor de un atributo de un objeto

```js
const person = { 
    name: 'Alex',
    edad: 18 
}

person.name; // accedo a una propiedad con el . +  el nombre de la propiedo. Esto devuelve su valor --> 'Alex' (string)


person.name.toUpperCase(); // 'ALEX'


const obj = { 
    notas: [4,1,3,5,7],
    tutor: {
        name: 'El que sea',
        experience: 44
    },
    profesores: [
        {
            name: 'Uno',
            email: 'uno@uno.uno'
        },
        {
            name: 'Jose',
            email: 'Jose@Jose.dos'
        }
    ]
}

obj.tutor.name; // 'El que sea' (string)--> acceso a un objeto anidado

obj.profesores.name; // undefined --> no existe la propiedad name en profesores
obj.profesores[0].name; // 'Uno' string

obj.profesores.map(p => p.name); // ['Uno', 'Jose'] --> Array de strings

```

### Modifico/creo una propiedad existente

```js

const person = { 
    name: 'Alex',
    edad: 18 
}

person.edad += 1; // con los operadores de asignacion puedo cambiar o actualizar el valor de una propiedad

person.nacionalidad = 'Español'; // añado un atributo
person['nacionalidad'] = 'Español'; // otra forma tanto de añadir como de acceder a una propiedad, como modificar.
```

### borrar una propiedad

```js

const person = { 
    name: 'Alex',
    edad: 18 
}

delete person.name; // borra la propiedad name del objeto

```
