# Arrays

Los arrays son la forma de crear una lista de elementos en el mundo de la programación. Con ellas puedo realizar muchas operaciones como en la vida real:

    - Crear una lista de cero
    - Añadir un elemento a la lista
    - Eliminar un elemento de la lista
    - Modificar un elemento de la lista
    - Leer/buscar un elemento de la lista
    - Filtrar la lista generando otra lista con menos elementos
    - Pintar la lista
    - ...

Los arrays son un tipo de datos y por tanto se almacenan en variables y luego podemos operar con esa variable. Lo importante es identificar QUE quiero hacer con esa lista.

Otra caracteristica que tienen es que los elmentos de la lista TAMBIEN son tipos de datos.

## Sintaxis

### Creación

Para poder crear y ejecutar acciones con la lista tenemos la siguiente sintaxis:

    ```js
        // CREACION DE UNA LISTA
        const arr = []; // la lista se crea abriendo y cerrando el caracter corchete. En este caso hemos creado una lista vacia
        let arr = [1, 4, 2, 5]; // Creamos una lista con 4 elementos number. Tambien se pueden crear con let
        const arr = ["hola", "adios"]; // Creamos una lista con 2 elementos string
        const arr = [true, false]; // Creamos una lista con 2 elementos boolean
        const arr = [
            [4, 5],
            [4, 29]
        ]; // Creamos una lista con 2 elementos de tipo lista de numbers
        const n =5;
        const arr = [n,n,n]; // esto crea un array de numeros con 3 elementos cuyo valor es 5 para todos los elementos
        const arr = Array(3).fill(n); // esto crea un array igual al anterios
        const arr = Array(5); // crea una lista de 5 elementos vacios
        const arr = Array(5).fill(true); // crea una lista de 5 elementos booleanos con valor true
        const arr = [a => a+a, a => a*a]; // esto crea un array de dos elementos de tipo funcion
    ```

### Acceso

Una vez que hemos visto como crear arrays, ¿Como puedo acceder a un elemento?

    ```js
        /*
         Antes de recuperar un elemento necesito saber en qué posición se encuentra.
         Las posiciones en un array, en JS, empiezan desde el 0 y la última posición es la longitud del array-1. La longitud del array se obtiene accediendo al `.length` de la variable, es decir, igual que hacíamos con los strings
        */
       const arr = [4,45,22,66,77,12,34]; // array de 7 elementos de number
       arr.length; // 7. length es de tipo number
       arr[0]; // esto devuelve el elemento de la posicion 0 del array ==> 4
       arr[arr.length-1]; // esto devuelve el último elmento del array ==> 34
       arr[6]; // esto devuevle el elemento en la posición 6 del array ==> 34
       const s = arr[3] + arr[2]; // ¿cuanto vale s? 66+22 = 88;

       const arr = ['hola', 'adios'];
       arr[0].toUpperCase(); // 'HOLA'

       arr[23]; // ?? que devuelve esto ==> undefined
    ```

### Modificacion de un elemento existente

Una vez que ya se como crear una lista y como acceder a un elemento de una lista (dada una posición). ¿Como puedo modificar un elemento existente en la lista?

    ```js
        /*
            La idea es que el acceso a ese elemento se trate como una variable y por tanto podremos reasignarle un valor como si fuese una variable.

            Por tanto para modificar un elemento de la lista, primero necesito saber su posición
        */
       const arr = [4,45,22,66,77,12,34];
       arr[0] = 8; // esto cambia el primer elemento y ahora pasa a valer 8
       arr[0]; // esto ya no devuelve 4 nunca mas ahora devuelve 8

       arr[4] *= 2; // arr[4] = arr[4] * 2; la posicion 4 del array ahora vale 154

       const arr = ['hola', 'adios'];
       arr[0] += arr[1]; // ['holaadios', 'adios']. Solo se modifica la posicion de 0

    ```

### Añadir un elemento

¿Como creo un elemento nuevo en la lista?. Para resolver esta pregunta primero tengo que distinguir dos casos.

- Añadir un elemnto al final de la lista.

  ```js
  /*
      ¿En que posición debería añadir el nuevo elemento?
    */
  const arr = [true, false]; // arr de dos elementos y dos posiciones 0 y 1
  arr.length; // 2 === que casualidad justo donde quiero mi nuevo elemento
  arr[arr.length] = true; // añade un elemento al final de al lista, dejando el array [true, false, true]
  arr.length; // 3

  arr[5] = false; // ¿Que pasaria? [true, false, true,_vacio_, _vacio_, false]
  arr.length; // 6
  arr[3]; // undefined
  ```

- Añadir un elemento en una posicion en la que ya existe otro elemento => Para ello necesitamos conocer como `recorremos arrays`. Mañana veremos una funcion que nos lo hace.

### Recorrer una lista

Es moverse por la lista de diferentes maneras. Ascendente (del principio al final), descendente (Del final al principio) o con cualquier forma que se nos ocurra.

La forma que tenemos para recorrer array es utilizando bucles. La variable de control es la variable number que me indica la posicion actual del array en la que estoy.

```js
const arr = [3, 123, 1, 23, 2]; // array de 5 elementos de tipo number

for (let i = 0; i < arr.length; i++) {
  //  pinto todos los elementos del array en un p
  document.write(`<p>${arr[i]}</p>`);
}

// ahora quiero pintar la suma de los elementos de un array
let sumArr = 0; // en esta variable voy almacenando la suma acumulada
for (let i = 0; i < arr.length; i++) {
  sumArr += arr[i]; // añado a mi acumulador el valor de la posicion de la vuelta actual
}
document.write(`<p>${sumArr}</p>`);

// ¿Que pasa si tengo una lista de listas?

const arr = [
  [true, false],
  [false, true, true]
]; // listas de listas de booleanos

for(let i=0; i<arr.length; i++){
    arr[i]; // ¿Que tipo de datos tengo? -> lista de booleanos. i=0 -> [true, false], i=1 -> [false, true, true]
    arr[i][0]; // ¿Que tipo de datos? --> booleano. Si i = 0 --> true, si i=1 -> false
    arr[i].length; // ¿que tipo de datos? --> number, Si i=0--> 2, Si i=1 --> 3
    for(let j=0; j< arr[i].length; j++){
        arr[i][j]; // Recorre toda la sublista. Esto devuelve un bool 
        /*
          i=0, j=0 --> true
          i=0, j=1 --> false
          i=0, j=2 --> undefined, pero nunca el bucle llegaría a esta situacion
          i=1, j=0 --> false
          i=1, j=1 --> true
          i=1, j=2 --> true
          i=1, j=3 --> undefined, pero nunca el bucle llegaría a esta situacion
          i=2, j=0 --> ERROR de JS. Can not read xxx of undefined, pero nunca el bucle llegaría a esta situacion
        */
    }
}

```
