function htmlOutputP(inside) {
    const div_p = document.createElement('p');
    div_p.textContent = inside;
    document.body.appendChild(div_p);
}

// Sintaxis de promesas //

/*
// 1. Hello world. Crear una promesa que en su creación se resuelva con un string 'hola mundo'. Escuchar la resolución de la promesa y pintar el resultado por consola
const newPromise1 = new Promise((resolve, rejeact) => { 
    resolve('Hello World 1');
  });
  
  
  newPromise1.then(
      (data) => {console.log(data)},
      (err) => {console.log(err)}
  );

// 2. Hello world. Crear una promesa que en su creación se rechace con un string 'hola mundo rechazado'. Escuchar la resolución de la promesa y pintar el resultado por consola.
const newPromise2 = new Promise((resolve, rejeact) => { 
    rejeact('Hello World rejeact');
  });
  
  
newPromise2.then(
      (data) => {console.log(data)},
      (err) => {console.log(err)}
); 
// 3. Crear una promesa que se resuelva con un numero aleatorio del 1-10. Escuchar el resultado y pintarlo en un p.
const myPromise = new Promise ((resolve, reject) => {
    resolve(Math.floor(Math.random() * 11))
})

myPromise.then(
    (data) => {htmlOutputP(data)
    },
    (error) => htmlOutputP(error)
)

// 4. Crear una promesa que genere un numero aleatorio del 1-10. Si ese numero es par se resuelve la promesa con el numero. Si es impar se rechaza la promesa.
const myPromise = new Promise ((resolve, rejeact) => {
    let varNum = (Math.floor(Math.random() * 11));
    console.log(varNum);
    if(varNum % 2 === 0){
        resolve(varNum)
    } 
    rejeact('Error');
})

myPromise.then(
    (data) => htmlOutputP(data),
    
    (error) => htmlOutputP(error)
)

// 5. Crear una promesa que se resuelva a los 2 segundos con el texto 'Resuelta cuando pasaron 2 segundos'

const fivePromise = new Promise((resolve, rejeact) => {
    setTimeout(() => {
        resolve('Resuelta cuando pasaron 2 segundos');
    }, 2000);
})

fivePromise.then(
    (data) => htmlOutputP(data),
    (error) => htmlOutputP('ha surgido un error')
);

        // Timers //
// 1. crear una página que pinte un P con el texto 'hello timeout' a los 8 segundos.
const fivePromise = new Promise((resolve, rejeact) => {
    setTimeout(() => {
        resolve('HELLO TIMEOUT');
    }, 8000);
})

fivePromise.then(
    (data) => htmlOutputP(data),
    (error) => htmlOutputP('ha surgido un error')
);

// 2. En la página anterior crear un intervalo que pinte un p cada 500 ms con el texto 'conectando...'

    
setInterval(() => {htmlOutputP('conectando')}, 500);
        




// 3. Colocar un botón en el navegador que al pulsarlo nos dibuje los números del 0 al 10. Entre elemento y elemento debe transcurrir 0.5 segundos. Para poder parar un intervalo, necesitamos la función clearInterval

const button = document.createElement('button');
document.body.appendChild(button);
button.classList.add('button_ej3');

let contador = 1;


button.addEventListener('click', e => {
    
    let intervalo = setInterval(() => {
        htmlOutputP(contador);
        contador++;
    }, 500);
    intervalo;

    setTimeout(() => {
        window.clearInterval(intervalo)
    }, 5100);

})




// 4. Crear una función que se ejecute cada 1 segundo y pinte en Html un reloj con el formato hh:mm:ss

const button2 = document.createElement('button');
document.body.appendChild(button2);
button2.classList.add('button_ej3');

button2.addEventListener('click', e => {
    
    p_reloj = document.createElement('p');
    document.body.appendChild(p_reloj);

    let intervalo = setInterval(() => {
        let mementoActual = new Date();
        let hora = mementoActual.getHours();
        let minutos = mementoActual.getMinutes();
        if(minutos < 10){
            minutos =  `0${mementoActual.getMinutes()}`
       }
        let segundos = mementoActual.getSeconds()
        if(segundos < 10){
             segundos =  `0${mementoActual.getSeconds()}`
        }
        p_reloj.textContent = `${hora}:${minutos}:${segundos}`;
        
    }, 1000);
    intervalo;
})
*/

            // APPS //
// 5. Widget de estado de bateria. Vamos a crear un widget que nos indique el estado de la batería. Las imágenes de los diseños deben quedar así. Para poder obtener la información de la batería necesitamos la función navigator.getBattery




// FUNCION CARGA //


/*
const pluggedOrNot = new Promise((resolve,rejeact) => {
   let OnorNot = navigator.getBattery();
   
    if()
})
*/





// FUNCION QUE TE CREA LA CARD DE LA BATERIA //
function htmlOutputCard(){

    // CONTAINER CARD //
    const container_card = document.createElement('div');
    container_card.classList.add('container_card');
    document.body.appendChild(container_card);

    // DIV ANIMACION - BATERIA //
    const animacion_card = document.createElement('div');
    animacion_card.classList.add('animacion_card');
    animacion_card.setAttribute('id','animacion_card')
    container_card.appendChild(animacion_card);

    // DIV PARTE DE ARRIBA BATERIA//
    const parte_arriba = document.createElement('div');
    parte_arriba.classList.add('parte_arriba');
    animacion_card.appendChild(parte_arriba);

    // DIV PARTE DE ABAJO BATERIA//
    const parte_batery = document.createElement('div');
    parte_batery.classList.add('parte_batery');
    parte_batery.setAttribute('id','batery');
    animacion_card.appendChild(parte_batery);

    // DIV DETAILS CARD //
    const details_card = document.createElement('div');
    details_card.classList.add('details_card')
    container_card.appendChild(details_card);

    // P NIVEL BATERIA //
    const p_level = document.createElement('p');
    p_level.classList.add('p_level');
    p_level.setAttribute('id','p_level');
    details_card.appendChild(p_level);


    // P LEVEL TEXT //
    const text_level = document.createElement('p');
    text_level.classList.add('text_level');
    text_level.setAttribute('id','text_level')
    details_card.appendChild(text_level);


}

// FUNCIONES DE CARGAR BATERIA (3 siguientes) //
// DIV ANIMACION BATERIA //
function HtmlOutputDivBatery(){
    const batery = document.getElementById('batery');
    const div_batery = document.createElement('div');
    div_batery.classList.add('level_batery');
    batery.appendChild(div_batery);
}
// INTEVALO QUE TE CREA LA ANIMACION//
function chargeBattery(){

    let intervalo = setInterval(() => {
    HtmlOutputDivBatery();
    }, 500);
    setTimeout(() => {
    window.clearInterval(intervalo)
    }, 2500);
};
// FUNCION QUE REPITE LA RECARGA DE DIVS //
function regenerate() {
    let intervalo = setInterval(() => {
        chargeBattery();
       const array = document.querySelectorAll('.level_batery');
       array.forEach(e => {
           e.remove();
       })
        
    },2500);
}

function chargingChange() {
    console.log('evento')
 }





let OnorNot = navigator.getBattery()

// CREACION DE LAS TARJETAS PARA LAS DIFERENTES CARGAS //
 OnorNot.then(
     (x) => {
         x.onchargingchange = chargingChange()},
/*
     {if(x.charging === true){
        htmlOutputCard();
        let pLevel = document.getElementById('p_level');
        pLevel.textContent = `${(x.level.toFixed(2))*100}%`;
        let pText = document.getElementById('text_level');
        pText.textContent = 'CHARGING BATERY'
        let colorCard = document.getElementById('animacion_card');
        colorCard.classList.add('green');

        regenerate();
     } else {
        if(x.level >= 0.2){
            htmlOutputCard();
        let pLevel = document.getElementById('p_level');
        pLevel.textContent = `${(x.level.toFixed(2))*100}%`;
        let pText = document.getElementById('text_level');
        pText.textContent = 'GOOD BATERY'
        let colorCard = document.getElementById('animacion_card');
        colorCard.classList.add('green');
            if(x.level>20 && x.level < 50){
                for(let i = 0; i < 1; i++){
                    HtmlOutputDivBatery();
                }
            } else if (x.level>=50 && x.level <80){
                for(let i = 0; i < 2; i++){
                    HtmlOutputDivBatery();
                }
            } else {
                for(let i = 0; i < 4; i++){
                    HtmlOutputDivBatery();
            }}
        } else {
            htmlOutputCard();
            let pLevel = document.getElementById('p_level');
            pLevel.textContent = `${x.level.toFixed(2)*100}%`;
            let pText = document.getElementById('text_level');
            pText.textContent = 'LOW BATERY'
            let colorCard = document.getElementById('animacion_card');
            colorCard.classList.add('red');
            HtmlOutputDivBatery();
        }
     }},
*/
     (y) => console.log(y.charging)
 )

