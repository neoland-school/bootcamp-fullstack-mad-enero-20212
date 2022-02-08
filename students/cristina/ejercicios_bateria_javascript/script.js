'use.strict';

/* Sintaxis de promesas:*/
/* 1. Hello world. Crear una promesa que en su creación se resuelva con un string 'hola mundo'. Escuchar la resolución de la promesa y pintar el resultado por consola. */

/* const helloWorld = new Promise((resolve, reject) => {

    resolve('Hello World')



})

helloWorld.then(
    () => { console.log('Hello World') },
    () => { console.log('Hello World rechazado') },

) */

/* 2. Hello world. Crear una promesa que en su creación se rechace con un string 'hola mundo rechazado'. Escuchar la resolución de la promesa y pintar el resultado por consola.*/

/* const helloWorldRejected = new Promise((resolve, reject) => {


    reject('Hello World rechazado');


})

helloWorldRejected.then(
    () => { console.log('Hello World') },
    () => { console.log('Hello World rechazado') },

) */

/*
3. Crear una promesa que se resuelva con un numero aleatorio del 1-10. Escuchar el resultado y pintarlo en un p.*/


/* const numberAle = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10);

    resolve(number)

})

numberAle.then(
    data => {

        const p = document.createElement('p');
        p.textContent = `${data}`;
        document.body.appendChild(p)
    },
    error => console.log(error),

) */


/*
4. Crear una promesa que genere un numero aleatorio del 1-10. Si ese numero es par se resuelve la promesa con el numero. Si es impar se rechaza la promesa.*/

/* const numbAle = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10);

    if (number % 2 === 0) {
        resolve(number)

    } else {
        rejected('no es un número par')
    }


})

numbAle.then(
    data => console.log(data),
    error => console.log('no es un número par'),

) */



/*
5. Crear una promesa que se resuelva a los 2 segundos con el texto 'Resuelta cuando pasaron 2 segundos'. */

/* const twoSeconds = new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve('Resuelta cuando pasaron 2 segundos');
    }, 2000);

})

twoSeconds.then(
    data => console.log(data),
    error => console.log(error),
) */



/* Timers:

1. crear una página que pinte un P con el texto 'hello timeout' a los 8 segundos.*/

/* const printPage = new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve('hello timeout');
    }, 8000);
    
})


printPage.then(
    data => {

        const p = document.createElement('p');
        p.textContent = `${data}`;
        document.body.appendChild(p)
    },
    error => console.log(error),

) */

/*
2. En la página anterior crear un intervalo que pinte un p cada 500 ms con el texto 'conectando...'*/

/* const printInterval = setInterval(() => { 
    const p = document.createElement('p');
        p.textContent = 'conectando...';
        document.body.appendChild(p)
    }, 500);  */


/*
3.Colocar un botón en el navegador que al pulsarlo nos dibuje los números del 0 al 10. Entre elemento y elemento debe transcurrir 0.5 segundos. Para poder parar un intervalo, necesitamos la función clearInterval*/


/* const buttonPush = document.createElement('button')
buttonPush.textContent = 'Pulsar'
document.body.appendChild(buttonPush)

let number = 0;

buttonPush.addEventListener('click', () => {


    const Interval = setInterval(() => {
        number = number + 1
        const p = document.createElement('p');
        p.textContent = `${number}`;
        document.body.appendChild(p)

        if (number === 10) {

            clearInterval(Interval)

        }
    }, 500);

}) */



/*
4. Crear una función que se ejecute cada 1 segundo y pinte en Html un reloj con el formato hh:mm:ss */


/*    let hours = 0
   let minutes = 0
   let seconds = 0

    const clockPrint = document.createElement('p')
    document.body.appendChild(clockPrint)

setInterval(() => {
    let clock = new Date()
     hours = clock.getHours()
     minutes = clock.getMinutes()
     seconds = clock.getSeconds()

    

    let clockNew = `${hours}:${minutes}:${seconds}`;

    clockPrint.textContent = (clockNew)


}, 1000); */



/* Widget de estado de bateria. Vamos a crear un widget que nos indique el estado de la batería. Las imágenes de los diseños deben quedar así. Para poder obtener la información de la batería necesitamos la función navigator.getBattery */


//Función pila

function bateryLine() {

    const divContainer = document.querySelector('.pila_inferior');
    let contador = 0

    let bat = setInterval(() => {

        let lineDiv = document.createElement('div');
        lineDiv.className = ('linea');
        divContainer.appendChild(lineDiv);

        if (lineDiv) {
            contador++
        }

        if (contador === 6) {

            clearInterval(bat)

            while (divContainer.firstChild) {
                divContainer.removeChild(divContainer.firstChild);
              }
              bateryLine()     
        }
        
    }, 800);
    

}


bateryLine()



// Función % de batería retante

const bat = navigator.getBattery()
    .then(function (batteryManager) {

        const divInferior = document.querySelector('.parte_inferior');
        const level = document.querySelector('.battery_number');
        level.textContent = `${batteryManager.level * 100}%`;
        divInferior.appendChild(level);

        const descripton = document.querySelector('.battery_description');
        descripton.textContent = `Battery Charging`;
        divInferior.appendChild(descripton);

    })
    .error(function (e) {
        console.error(e);
    });








