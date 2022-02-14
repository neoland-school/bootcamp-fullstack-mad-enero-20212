
//1- Crear una función que realice una petición a nuestro backend (url: https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88, method: GET) y pinte el resultado por pantalla. Realizar el ejercicio utilizando then. Responder a las siguientes preguntas:

// ¿Qué tipo de datos tiene la respuesta?
// Respuesta: te devuelve otra promesa (objeto), si vuelves a hacer un then + JSON, te devuelve un objeto(individuo de la clase)
fetch('https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88').then(r => console.log(typeof r)); // promesa que saco del servidor
fetch('https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88').then(r => r.json()).then(p => console.log(typeof p)); // objeto que tiene una clase dentro




// ¿Cuál es la ip y el puerto de la petición?
// MIRAR EN EL NETWORK
// IP: 52.85.187.63.443





// ¿Cuántos atributos tiene nuestra respuesta?
// Respuesta: 
fetch('https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88').then(r => r.json()).then(p => console.log(p));



// ¿Qué tipo de datos tiene esos atributos?
fetch('https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88').then(r => r.json()).then(p => console.log(typeof p.hola));
// Respuesta: tiene una clase con un string dentro



// ¿Qué código http de respuesta hemos recibido?
fetch('https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88').then(r => console.log(r.status))
// Respuesta: 200 ok!


// 2 - Repetir la función del ejercicio 1 pero esta vez utilizando async/await

async function impFetch(){
    const a = await fetch('https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88');
    const b = await a.json();
    console.log(b.hola)
}

impFetch();



// 3- Imprimir 1 de los atributos de la respuesta en un p en el body

async function htmlOutputAllAtributtes(){
    const a = await fetch('https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88');
    const b = await a.text();
    const htmlP = document.createElement('p');
    htmlP.textContent = b.hola;
    document.body.appendChild(htmlP)
}

htmlOutputAllAtributtes();


// Datos de frutas:
// 1- Crear una función que obtenga los datos de frutas en España. Esta función obtendrá los datos por GET de la siguiente URL (https://run.mocky.io/v3/b68bb258-78a1-4c92-acf5-2c5401707ae0 ). Construir una función usando async/await que pinte un listado de frutas en el HTML y que miestre la siguiente información de cada fruta (nombre, origen y su imagen). contestar a las siguientes preguntas:

async function AllFruits(){
    const a = await fetch('https://run.mocky.io/v3/b68bb258-78a1-4c92-acf5-2c5401707ae0');
    console.log(a)

    const b = await a.json();
    console.log(b);

    b.forEach(element => {
        const htmlP1 = document.createElement('p');
        htmlP1.textContent = `fruta: ${element.name}`;
        document.body.appendChild(htmlP1);
        const htmlP2 = document.createElement('p');
        htmlP2.textContent = `origen: ${element.origin}`;
        document.body.appendChild(htmlP2);
        const img = document.createElement('img');
        img.src = element.img;
        document.body.appendChild(img)

    });
}

AllFruits();



// ¿Qué tipo de datos tiene la respuesta?
// Repuesta: Tengo un array de objetos ('cors'), con varias caracteristicas cada uno.

// ¿Cuál es la ip y el puerto de la petición?


// ¿Cuántos atributos tiene nuestra cada elemento de la fruta de la respuesta?
// Repuesta: Cada elemento tiene tres atributos: img, name, origin


// ¿Qué tipo de datos tiene esos atributos?
// Repuesta: la imagen tiene una url en formato string, y el resto tienen strings

// ¿Qué código http de respuesta hemos recibido?
// Repuesta: 202 ok!







