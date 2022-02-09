// Sintaxis de promesas:
// 1. Hello world. Crear una promesa que en su creación se resuelva con un string 'hola mundo'. Escuchar la resolución de la promesa y pintar el resultado por consola

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve();
//     },5000)
// });

// myPromise.then(
//     () =>{console.log('Hello world')},
//     () => {console.log('Hello world rejected')}
// ); 


// 2- Hello world. Crear una promesa que en su creación se rechace con un string 'hola mundo rechazado'. Escuchar la resolución de la promesa y pintar el resultado por consola.

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (3===3){
//             resolve()
//         }
//         reject();
//     },2000)
// });

// myPromise.then(
//     () =>{console.log('Hello world')},
//     () => {console.log('Hello world rejected')}
// ); 

// 3. Crear una promesa que se resuelva con un numero aleatorio del 1-10. Escuchar el resultado y pintarlo en un p.

// const myPromise = new Promise((resolve, reject) => {
//     // reject('MACA ES TONTA')
//     resolve(Math.floor(Math.random(0)*10))
// });

// myPromise.then(
//     (data) =>{
//         let p1 = document.createElement('p');
//         document.body.appendChild(p1);
//         p1.textContent = data;
//         console.log(data)},
//     // data => {
//         // let p1 = document.createElement('p');
//         // document.body.appendChild(p1);
//         // p1.textContent = data;
//         // console.log(data)},    
//     (err) => {console.warn(err)}
// ); 

// 4. Crear una promesa que genere un numero aleatorio del 1-10. Si ese numero es par se resuelve la promesa con el numero. Si es impar se rechaza la promesa.
// const myPromise = new Promise((resolve, reject) => {
//     let random= Math.floor(Math.random(0)*10);
//     if(random%2===0){
//         resolve(random)
//     } else {reject('MACA ES TONTA')}
// });

// myPromise.then(
//     (data) =>{
//         let p1 = document.createElement('p');
//         document.body.appendChild(p1);
//         p1.textContent = data;
//         console.log(data)},
//     // data => {
//         // let p1 = document.createElement('p');
//         // document.body.appendChild(p1);
//         // p1.textContent = data;
//         // console.log(data)},    
//     (err) => {console.warn(err)}
// ); 

// 5. Crear una promesa que se resuelva a los 2 segundos con el texto 'Resuelta cuando pasaron 2 segundos'

// const myPromise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Resuelta cuando pasaron 2 segundos');
//     },2000)
// });

// myPromise2.then(
//     data => console.log(data),
//     () => {console.log('Hello world rejected')}
// ); 


// Timers:
// 1. Crear una página que pinte un P con el texto 'hello timeout' a los 8 segundos.

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('hello timeout');
//     },4000)
// });

// myPromise.then(
//     data => {
//         let p1 = document.createElement('p');
//         document.body.appendChild(p1);
//         p1.textContent = data},
//     () => {console.log('Hello world rejected')}
// ); 


// 2. En la página anterior crear un intervalo que pinte un p cada 500 ms con el texto 'conectando...'

// const myPromise = new Promise((resolve, reject) => {
// setInterval(() => {
//     resolve('conectando...');
// },500)
// });

// myPromise.then(
//     data => {
// let p1 = document.createElement('p');
// document.body.appendChild(p1);
// p1.textContent = data},
//     () => {console.log('Hello world rejected')}
// ); 


// 3. Colocar un botón en el navegador que al pulsarlo nos dibuje los números del 0 al 10. Entre elemento y elemento debe transcurrir 0.5 segundos.Para poder parar un intervalo, necesitamos la función clearInterval.

// const but = document.createElement('button');
// document.body.appendChild(but);
// but.textContent = 'pulsar';

// but.addEventListener('click', () => {
// let counter = 0
// let interval = setInterval(() => {
//     let p1 = document.createElement('p');
//     document.body.appendChild(p1);
//     p1.textContent = counter;
//     counter++
//     if (counter===11){
//         clearInterval(interval)
//     }
// }, 500)
// });


// 4. Crear una función que se ejecute cada 1 segundo y pinte en Html un reloj con el formato hh:mm:ss

// let p1 = document.createElement('p');
// document.body.appendChild(p1);

// let segundos = 0;
// let minutos = 0;
// let horas = 0;
// let interval = setInterval(() => {
//     segundos++
//     p1.textContent = `${horas}:${minutos}:${segundos}`;
//     if (segundos >= 60){
//         segundos = 0;
//         minutos++   
//     } 
//     if (minutos >= 60) {
//         minutos = 0
//         horas++
//     }    
//     if (horas >= 24){
//         horas = 0
//     }
// }, 1000);




// EJERCICIO DE LA BATERÍA
// Widget de estado de bateria. Vamos a crear un widget que nos indique el estado de la batería. Las imágenes de los diseños deben quedar así. Para poder obtener la información de la batería necesitamos la función navigator.getBattery


// let div1 = document.createElement('div');
// document.body.appendChild(div1);
// div1.classList.add('div1')

// let div1img = document.createElement('div');
// div1.appendChild(div1img);
// div1img.classList.add('div1img')

// let div1info = document.createElement('div');
// div1.appendChild(div1info);
// div1info.classList.add('div1info')

// let divBatery1 = document.createElement('div');
// div1img.appendChild(divBatery1);
// divBatery1.classList.add('divBatery1')

// let divBatery1top = document.createElement('div');
// div1img.appendChild(divBatery1top);
// divBatery1top.classList.add('divBatery1top')

// // let div2 = document.createElement('div');
// // document.body.appendChild(div2);
// // div2.classList.add('div2')

// // let div2img = document.createElement('div');
// // div2.appendChild(div2img);
// // div2img.classList.add('div2img')

// // let div2info = document.createElement('div');
// // div2.appendChild(div2info);
// // div2info.classList.add('div2info')

// // let divBatery2 = document.createElement('div');
// // div2img.appendChild(divBatery2);
// // divBatery2.classList.add('divBatery1')

// // let divBatery2top = document.createElement('div');
// // div2img.appendChild(divBatery2top);
// // divBatery2top.classList.add('divBatery2top')

// // let rayitaRoja = document.createElement('div');
// // divBatery2.appendChild(rayitaRoja);
// // rayitaRoja.classList.add('rayitaRoja');

// let batteryManager = null // info de la bateria
// function crearRayita() {
//     let rayita = document.createElement('div');
//     divBatery1.appendChild(rayita);
//     rayita.classList.add('rayita')
// }

// let interval

// function bateryAnimation(a = 0) {
//     let counter = a
//     interval = setInterval(() => {
//         crearRayita()
//         counter++
//         if (counter === 5) {
//             document.querySelectorAll('.rayita').forEach(e => e.remove());
//             counter = a;
//         }
//     }, 500)
// }


// // 1 Level de bateria en el div dea abajo 
// // 2 Estado de si estoy enchufado o no

// let batteryLevel = document.createElement('h2');
// div1info.appendChild(batteryLevel);
// batteryLevel.classList.add('batteryLevel');
// batteryLevel.textContent = '60%';

// let batteryStatus = document.createElement('p');
// div1info.appendChild(batteryStatus);
// batteryStatus.classList.add('batteryStatus');


// navigator.getBattery().then(a => {
//     batteryLevel.textContent = `${a.level * 100}%`;
//     for (i = 1; i <= Math.ceil(a.level / 0.25); i++) {
//         crearRayita()
//     }
//     batteryStatus.textContent = 'No esta conectado al cargador';

// });

// navigator.getBattery().then(a => {
//     a.onlevelchange = () => {
//         for (i = 1; i <= Math.ceil(a.level / 0.25); i++) {
//             crearRayita()
//         }
//         batteryLevel.textContent = `${a.level * 100}%`
//     }
//     a.onchargingchange = () => {
//         if (a.charging) {
//             bateryAnimation()
//             batteryStatus.textContent = 'Esta conectado al cargador';
//         } else {
//             for (i = 1; i <= Math.ceil(a.level / 0.25); i++) {
//                 crearRayita()
//             }
//             batteryStatus.textContent = 'No esta conectado al cargador';
//         }
//     }
// })

// FALTA RETOCAR EL EJERCICIO DE LA BATERIA 




