// Sintaxis de promesas:
// 1. Hello world. Crear una promesa que en su creación se resuelva con un string 'hola mundo'. Escuchar la resolución de la promesa y pintar el resultado por consola

// const myPromise = new Promise((resolve, reject) => {
//         resolve('si esto funciona significa que kokito es lelo');
//         // reject ('adios mundo')
   
// });

// myPromise.then(
//     (data) => { console.warn(data)},
//     (err) => { console.log (err)}
// );

// 2. Hello world. Crear una promesa que en su creación se rechace con un string 'hola mundo rechazado'. Escuchar la resolución de la promesa y pintar el resultado por consola.


// const myPromise = new Promise((resolve, reject) => {
    
//     // if( 2===3) {resolve()}
//     reject (' hola mundo rechazado');

// });

// myPromise.then(
//     () => { console.log('Hello fucking world')},
//     (err) => { console.log (err)}
// );
// 3. Crear una promesa que se resuelva con un numero aleatorio del 1-10. Escuchar el resultado y pintarlo en un p.

// const myPromise = new Promise((resolve, reject) => {
//     resolve(Math.floor(Math.random(1)*10))
//     // reject ();
   
// });

// myPromise.then(
//     (data) => {

//     let p1= document.createElement('p')
//     document.body.appendChild(p1)
//     p1.textContent= data;
//     console.log(data)},

//     () => { console.log (' hola mundo rechazado')}
// );

// 4. Crear una promesa que genere un numero aleatorio del 1-10. Si ese numero es par se resuelve la promesa con el numero. Si es impar se rechaza la promesa.


// const myPromise = new Promise((resolve, reject) => {

//     let random= Math.floor(Math.random(1)*10)
//     if (random%2===0){
//         resolve(random)
//     }else{
//         reject('es impar y además kokito debe pesar más que un manatí');
//     } 
       
//     });
    
//     myPromise.then(
//         (data) => {
    
//         let p1= document.createElement('p')
//         document.body.appendChild(p1)
//         p1.textContent= data;
//         console.log(data)},
    
//         (err) => { let p2= document.createElement('p')
//         document.body.appendChild(p2)
//         p2.textContent= err;
//         console.log(err)},
//     );
    




// 5. Crear una promesa que se resuelva a los 2 segundos con el texto 'Resuelta cuando pasaron 2 segundos'
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
        
//         resolve('Han pasado 2 segundos y kokito sigue pesando más que un manatí');
//     }, 2000);
// });

// myPromise.then(
//     (data) => { console.log (data)},
//     (err) => { console.log (err)}
// );




// 11:36
// Timers:
// 1. crear una página que pinte un P con el texto 'hello timeout' a los 8 segundos.



// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('hello timeout and hello to kokito, who is still fatter than a manatee. ');
//     }, 8000);
// });

// myPromise.then(
//     (data) => { let p1= document.createElement('p')
//             document.body.appendChild(p1)
//             p1.textContent= data;
//             console.log(data)},
//     () => { /* CALLBACK PARA REJECT */}
// );
// 2. En la página anterior crear un intervalo que pinte un p cada 500 ms con el texto 'conectando...'

// const myPromise = new Promise((resolve, reject) => {
//     setInterval(() => {
//         resolve('conectando... con el dietista de kokito');
//     }, 500);
// });

// myPromise.then(
//     (data) => { let p1= document.createElement('p')
//             document.body.appendChild(p1)
//             p1.textContent= data;
//             console.log(data)},
//     () => { /* CALLBACK PARA REJECT */}
// );


// 3. Colocar un botón en el navegador que al pulsarlo nos dibuje los números del 0 al 10. Entre elemento y elemento debe transcurrir 0.5 segundos.Para poder parar un intervalo, necesitamos la función clearInterval

// const but = document.createElement('button')
// document.body.appendChild(but)
// but.textContent= 'boton'
// let contador= 0

// but.addEventListener('click',() =>{
//    let int =  setInterval(() => {
//         let p1= document.createElement('p')
//         document.body.appendChild(p1)
//         p1.textContent=contador;
//         contador++
//         if (contador===10){
//             clearInterval(int)
//         }

//     }, 500);

// })


// 4. Crear una función que se ejecute cada 1 segundo y pinte en Html un reloj con el formato hh:mm:ss


// let p1 = document.createElement('p');
// document.body.appendChild(p1);
// let segundos = 0;
// let minutos = 0;
// let horas = 0;
// let reloj = setInterval(() => {
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



// 5.Apps:
// Widget de estado de bateria. Vamos a crear un widget que nos indique el estado de la batería. Las imágenes de los diseños deben quedar así. Para poder obtener la información de la batería necesitamos la función navigator.getBattery (https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery):
// https://dribbble.com/shots/5007024-Flash-Message-Battery-Status-Daily-UI-16


let divGreen= document.createElement ('div');
document.body.appendChild(divGreen);
divGreen.classList.add('classGreen')

let divGreenA= document.createElement ('div');
divGreen.appendChild(divGreenA);
divGreenA.classList.add('classGreenA')

let bateryGreen=document.createElement('div')
divGreenA.appendChild(bateryGreen);
bateryGreen.classList.add('bateryGreen')

let topGreen=document.createElement('div')
divGreenA.appendChild(topGreen)
topGreen.classList.add('topGreen')



let divGreenB= document.createElement ('div');
divGreen.appendChild(divGreenB);
divGreenB.classList.add('classGreenB')

let divRed= document.createElement ('div'); 
document.body.appendChild(divRed);
divRed.classList.add('classRed')

let divRedA= document.createElement ('div'); 
divRed.appendChild(divRedA);
divRedA.classList.add('classRedA')

let divRedB= document.createElement ('div'); 
divRed.appendChild(divRedB);
divRedB.classList.add('classRedB')

let bateryRed=document.createElement('div')
divRedA.appendChild(bateryRed);
bateryRed.classList.add('bateryRed')

let divCargaR= document.createElement('div')
bateryRed.appendChild(divCargaR)
divCargaR.classList.add('divcargaRed')

let contador= 0
let int =  setInterval(() => {
    let divCarga= document.createElement('div')
    bateryGreen.appendChild(divCarga)
    divCarga.classList.add('divcargaGreen')
    contador++
    if(contador===6) {
        document.querySelectorAll('.divcargaGreen').forEach(e=> e.remove())
       contador=0
    }
}, 300);





