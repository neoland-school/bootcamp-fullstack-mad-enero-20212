/**
 * 
 *  Crear una función que realice una petición a nuestro  * backend 
 * (url: https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88, method: GET) 
 * y pinte el resultado por pantalla. Realizar el ejercicio utilizando then. 
 * Responder a las siguientes preguntas:
 * 
 *      - ¿Qué tipo de datos tiene la respuesta? --> Un objeto con el parámetro hola, de tipo string cuyo valor es 'mundo'
 *      - ¿Cuál es la ip y el puerto de la petición? --> mocki.io es la IP. El puerto está vacío
 *      - ¿Cuántos atributos tiene nuestra respuesta? --> uno, hola, de tipo string
 *      - ¿Qué tipo de datos tiene esos atributos? -->  string
 *      - ¿Qué código http de respuesta hemos recibido? --> 200
 */

function getPetition(){

    return fetch('https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88')
            .then(r=> r.json())
            .then(data => data);

}

getPetition().then(data => {
    console.log(data) 

});

/** PARA RESPONDER A LAS PREGUNTAS

console.log(location.hostname);
console.log(location.port);
console.log(location.protocol);
 */

/**
 * 2 - Repetir la función del ejercicio 1 pero esta vez utilizando async/await
 * 
 * 
 */

async function getPetition(){
    const respuesta = await fetch('https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88');

    const data = await respuesta.json();

    return data;
}

getPetition().then(data => console.log(data));


/**
 * 3- Imprimir 1 de los atributos de la respuesta en un p en el body
 * 
 */

getPetition().then(data => {
    
    const pDOM = document.createElement('p');
    pDOM.textContent = `Estoy pintando el valor del atributo 'hola', que es  "${data.hola}"`;
    document.body.appendChild(pDOM);
    
 } );


 /**
  * 1- Crear una función que obtenga los datos de frutas en España. Esta función obtendrá 
  * los datos por GET de la siguiente 
  * URL (https://run.mocky.io/v3/b68bb258-78a1-4c92-acf5-2c5401707ae0 ). 
  * Construir una función usando async/await que pinte un listado de frutas en el HTML
  *  y que miestre la siguiente información de cada fruta (nombre, origen y su imagen). 
  * contestar a las siguientes preguntas:
  *     - ¿Qué tipo de datos tiene la respuesta? --> Array de objetos
  *     - ¿Cuál es la ip y el puerto de la petición? --> 443
  *     - ¿Cuántos atributos tiene cada elemento de la fruta de la respuesta? --> 3. img, name y origin
  *     - ¿Qué tipo de datos tiene esos atributos? --> strings
  *     -  ¿Qué código http de respuesta hemos recibido? --> 202 Acepted
  * 
  */

 async function getFruitsInSpain(){

    const response = await fetch('https://run.mocky.io/v3/b68bb258-78a1-4c92-acf5-2c5401707ae0');
    
    const data = await response.json();

    return data;

 }

 //getFruitsInSpain().then(data => console.log(data))

 function drawFruits(arrFruits){
 
        arrFruits.forEach(fruit => { //hago cosas con elos datos solicitados. Pinto los resultados
        const divDOM = document.createElement('div');
        document.body.appendChild(divDOM);
        const pNameDOM = document.createElement('p');
        pNameDOM.textContent = `Nombre: ${fruit.name} `;
        divDOM.appendChild(pNameDOM);

        const pOriginDOM = document.createElement('p');
        pOriginDOM.textContent = `Origen: ${fruit.origin} `;
        divDOM.appendChild(pOriginDOM);

        const imgDOM = document.createElement('img');
        imgDOM.setAttribute('src',fruit.img); 
        divDOM.appendChild(imgDOM);
    });
 }

 //getFruitsInSpain().then(arrFruits => drawFruits(arrFruits)); --> Aqui uso el then para pintar los resultados


 //me creo una función asincrona que me pinta los ressultados. Luego solo tendré que llamar a esa funcion.
 async function startApp(){ //--> Aqui uso una función asincrona para pintar los resultados

    const dataFruits = await getFruitsInSpain();
    drawFruits(dataFruits);
 }

 startApp();