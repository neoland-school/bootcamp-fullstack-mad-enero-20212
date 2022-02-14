/**
 * 1- Crear una función que realice una petición a nuestro backend 
 * (url: https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88, method: GET) y 
 * pinte el resultado por pantalla. Realizar el ejercicio utilizando then. Responder a las 
 * siguientes preguntas:
        ¿Qué tipo de datos tiene la respuesta?
        ¿Cuál es la ip y el puerto de la petición?
        ¿Cuántos atributos tiene nuestra respuesta?
        ¿Qué tipo de datos tiene esos atributos?
        ¿Qué código http de respuesta hemos recibido?
2 - Repetir la función del ejercicio 1 pero esta vez utilizando async/await
3- Imprimir 1 de los atributos de la respuesta en un p en el body
 */




/*1.a  
        1- Crear una función que realice una petición a nuestro backend 
 * (url: https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88, method: GET)
*/


function getBackend() {
    return fetch(`https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88`)
        .then(r => r.json())
        .then(p => p)
};

console.log(getBackend());


// 1a ¿Qué tipo de datos tiene la respuesta?

console.log(typeof getBackend())


// 2a  ¿Cuál es la ip y el puerto de la petición?

// 3a ¿Cuántos atributos tiene nuestra respuesta?