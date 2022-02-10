/**
 * 1. Hello World. Crear una promeda que se su creacion se reuelva con un string"hola mundo". 
 * Escuchar la resolucion de la promesa  y pintar el resultado por consola
 */

// const promesa = new Promise((resolve, reject) => {
//     resolve('hola mundo');
// });

// promesa.then(
//     () => {
//         console.log('hola mundo');
//     },
//     () => {
//         console.log('World Hello');
//     }
// );

/*
 * Hello world. Crear una promesa que en su creación se rechace con un string 'hola mundo 
 * rechazado'. Escuchar la resolución de la promesa y pintar el resultado por consola.
 */

// const promesaRechazada = new Promise((resolve, reject) => {
//     reject('hola mundo rechazado')
// });

// promesaRechazada.then(
//     () => {
//         console.log('NO rechazado')
//     },
//     () => {
//         console.log('hola mundo rechazado')
//     }
// );

/*
 * Crear una promesa que se resuelva con un numero aleatorio del 1-10. 
 * Escuchar el resultado y pintarlo en un p.
 */

// const promesa = new Promise((resolve, reject) => {
//     const a = (Math.floor(Math.random() * 10) + 1);
//     resolve(a);
// });

// promesa.then(res => {
//     const parrafo = document.createElement('p');
//     document.body.appendChild(parrafo);
//     parrafo.textContent = (`El numero aleatorio es ${res}`)
// });

/*
4. Crear una promesa que genere un numero aleatorio del 1-10. Si ese numero es par se 
resuelve la promesa con el numero. Si es impar se rechaza la promesa.
*/

// const isEven = new Promise((resolve, reject) => {
//     const b = (Math.floor(Math.random() * 10) + 1);
//     resolve(b);
// });
// isEven.then(isIt => {
//     if (isEven % 2 === 0) {
//         console.log(`el numero ${isIt} es PAR`)
//     } else {
//         console.log(`El numero ${isIt} es IMPAR`);
//     }
// });


/**
 *  Widget de estado de bateria. Vamos a crear un widget que nos indique el estado de la batería. 
Las imágenes de los diseños deben quedar así. Para poder obtener la información de la batería 
necesitamos la función navigator.getBattery 
(https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery):
https://dribbble.com/shots/5007024-Flash-Message-Battery-Status-Daily-UI-16
 */

/**
 * Me estan pidiendo una aplicación web para mostrar la información de la batería:
 *  - ¿Que información necesito? (datos que necesito y donde los saco)
 *      - Porcentaje de la batería (nivel de batería) -> La propiedad level del objeto Battery Manager
 *      - Si la batería está cargando o no -> La propiedad charging del objeto BatteryManager
 *
 *  - ¿Que estados tiene mi aplicación? (como cambia mi aplicación en las diferentes situaciones)
 *      - Si la batería está cargando:
 *          * Animación de las celdas
 *          * El texto tiene que ser "Battery Charging"
 *          * El icono tiene que ser el del flash
 *      - Si la bateria está en su ultima celda de nivel
 *          * El color tiene que ser rojo
 *          * El texto tiene que poner Low Battery
 *          * El icono tiene que ser de exclamación (siempre que no esté cargando)
 *      - Si la bateria está por encima de la ultima celda
 *          * El texto tiene que poner Battery ok
 *          * El color de fondo será verde
 *          * El icono será algun check o no existe.
 *      - Si no está cargando
 *          * No hay animación
 *
 *  - ¿Como obtengo el objeto Battery Manager?
 *      - navigator.getBattery --> resolve de la promesa tiene el Battery Manager
 */

/**
 * PROBLEMA 1- Mostrar la información actual de la bateria sin reaccionar cambios de estado
 *     a. Buscar en el HTML el DOM donde pondré la información
 *         a.1 - Porcentaje de bateria --> <h2 class="battery__level">
 *         a.2 - Si esta cargando o no --> <p class="battery__status">
 *
 *     b. Poner el valor actual del level de la bateria en el HTML que has buscado
 *         b.1 - Obtener el valor del level del Battery Manager (BatteryManager.level) (<h2 class="battery__level">)
 *             b.1.1 - Obtener primero el BatteryManager.
 *                         navigator.getBattery().then(
 *                             battery => { /** battery es el battery manager   }, // función de resolve
 *                             () => {} // función de reject
 *                         )
 *             b.1.2 -> Obtengo el level%, es decir, multiplicando por 100 en level.
 *
 *         b.2 - Obtener el valor de si está cargando o no y ponerlo en el p (<p class="battery__status">)
 *             b.2.1 -> Obtener primero el BatteryManager
 *             b.2.2 -> La propiedad charging dice true si está cargando y false si no lo está
 *
 * PROBLEMA 2- Si el nivel de la bateria cambia mostrarlo en el HTML (reaccionar al cambio del nivel)
 *               2.a - Registrar que quiero reaccionar al cambio de nivel (evento??)
 *               2.b - Cuando se produzca el evento de cambio de nivel,
 *                     actualizar el HTML con el nuevo nivel
 *
 * PROBLEMA 3- Si el estado de la bateria cambia mostrarlo en el HTML (reaccionar al cambio del estado)
 *               3.a - Registrar que quiero reaccionar al cambio de estado (evento??)
 *               3.b - Cuando se produzca el evento de cambio de estado,
 *                     actualizar el HTML con el nuevo estado
 *
 * PROBLEMA 4- Pintar en la pila del header el nivel de bateria adecuado
 *               4.a - El nivel de la bateria (resuelto en el problema 1)
 *               4.b - ¿Cuantas celdas muestro en función del nivel de la batería?
 *                        - ¿Cuando muestro 1 celda? --> Cuando el nivel de batería sea <=20% --> level<0.2
 *                        - ¿Cuando muestro 2 celda? --> Cuando el nivel de bateria sea >0.2 <=0.4
 *                        - ¿Cuando muestro 3 celda? --> >0.4 <=0.6
 *                        - ¿Cuando muestro 4 celda? --> >0.6 <=0.8
 *                        - ¿Cuando muestro 5 celda? --> >0.8
 *               4.c - Pintar en el HTML tantas celdas como indique el nivel.
 *                    4.c.a - Crear un div con clase battery__cell y añadirlo como hijo al battery__body
 *
 * PROBLEMA 5- Pintar en la pila del header el nivel de bateria adecuado cuando el nivel cambie
 *               5.a - Pasos previos === problema
 *               5.b - limpiar las celdas actuales
 *               5.c - Hago lo mismo que el problema 4
 */

// const batteryLevelDOM = document.querySelector(".battery__level");
// const batteryStatusDOM = document.querySelector('battery__status');
// const cells = 5;


// navigator.getBattery().then((battery) => {
//     printBatteryLevel(battery.level);
//     document.querySelector('.battery__status').textContent = battery.charging ? 'SI' : 'NO';
// });

// function printBatteryLevel(batteryLevel) {
//     batteryLevelDOM.textContent = `${batteryLevel * 10.5}%`;
// };

//-----------------------------------------
// 'use strict'
// let batteryCharge = true;
// const bateria = document.querySelector('.nivelBateria');
// const mnsj = document.querySelector('mesajeBateria');

// navigator.getBatery().then(battery => {
//     console.log(batteryLev);
//     batteryIsCharging = battery.chrging;
//     battery.onlevelchange = () => {
//         bateria.textContent = battery.level * 100 + "%";
//     }
// });

// battery.addEventListener('chargingchange', () => {
//     mensaje.textContent = battery.charging ?
//         'esta cargango' :
//         'no esta cargando';
//     bateria.textContent = batte.level
// });
// if (batteryIsCharging === true) {
//     mensaje.textContent = 'esta cargando';
//     bateria.textContent = battery.level * 100 + '%';
//     const divpila = document.querySelector('.imagen-8');
//     counter = 0;
// }

const numCeldas = 5;
const batteryLevelDom = document.querySelector('.battery__level'); // 1.a.1 y 1.b.2.1
const batteryStatusDom = document.querySelector('.battery__status'); // 1.a.2
const batteryBodyDom = document.querySelector('.battery__body'); // 4.c


navigator.getBattery().then((battery) => { // 1.b.1.1 type batery==object==baterryManeger 4.a
    battery.batteryLevelDom
    batteryLevelDom.textContent = `${battery.level*100}%`; // 1.b1.2
    batteryStatusDom.textContent = battery.charging ? 'Battery Chargingg' : 'Battery not Charging'; // 1.b.2.2

    const cellAcc = Math.ceil(battery.level * numCeldas); //4.b

    // VERSION SIN MATEMATICAS
    // let cellacc = 1;
    // if (battery.lievel > 0.2 && battery.level <= 0.4) { // 4.b
    //     cellacc = 2;
    // } else if (battery.lievel > 0.4 && battery.level <= 0.6) {
    //     cellacc = 3;
    // } else if (battery.lievel > 0.6 && battery.level <= 0.8) {
    //     cellacc = 4;
    // } else if (battery.lievel > 0.8) {
    //     cellacc = 5;
    // }

    for (let i = 0; i < numCeldas; i++) { // 4.c
        let div = document.createElement('div');
        div.classList.add('.battery__cell');
        batteryBodyDom.appendChild(div);
    }

    // LO HEMOS CANBIADO PO ADDEVENTLISTENER PORK TAMB SE PUEDE.
    // battery.onlevelchange = () => { // 2.a func k de ejecuta candi canbie la bateria
    //     batteryLevelDom.textContent = `${battery.level*100}%`; // 2.b
    // }

    battery.addEventListener('levelchange', () => { //2.b
        batteryStatusDom.textContent = `${battery.level*100}%`;
    })

    battery.onlevelchange = (chargingchange) => { // 3.a
        batteryLevelDom.textContent = `${battery.level*100}%`; // b.b
        batteryStatusDom.textContent = battery.charging ? 'Battery Not C' : 'Battery not Charginggg'; //3.b
    }

});