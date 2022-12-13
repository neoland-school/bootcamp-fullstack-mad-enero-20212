//Hello world. Crear una promesa que en su creación se resuelva con un string 'hola mundo'. Escuchar la resolución de la promesa y pintar el resultado por consola

const FirstPromise = new Promise((resolve,reject) =>{
    resolve('hola mundo');
   
}

)
FirstPromise.then(
    () => {'hola mundo'},
    () => {''},
)

//Hello world. Crear una promesa que en su creación se rechace con un string 'hola mundo rechazado'. Escuchar la resolución de la promesa y pintar el resultado por consola.

const SecondPromise = new Promise((resolve,reject) =>{
    reject('hola mundo rechazado');
   
}
)

//Crear una promesa que se resuelva con un numero aleatorio del 1-10. Escuchar el resultado y pintarlo en un p.

const thirdPromise = new Promise((resolve,reject)=>{
resolve(Math.floor(Math.random(1)*10));
}
)

thirdPromise.then(
    (data)=>{
    const p= document.createElement('p');
    p.textContent= data
    document.body.appendChild(p)
},
    (err) =>{
        
            const p= document.createElement('p');
            p.textContent= err
            document.body.appendChild(p)

    },
)



//Crear una promesa que genere un numero aleatorio del 1-10. Si ese numero es par se resuelve la promesa con el numero. Si es impar se rechaza la promesa.

const fPromise = new Promise ((resolve,reject) =>{
    const numero = (Math.floor(Math.random(1)*10));
    if(numero %2 === 0){resolve(numero)
     }else{reject('promesa rechazada porque el numero es impar')};
    }
)
fPromise.then(
    (data)=> {console.log(data)
    },
    (err) => {console.log(err)
    },
)


//Crear una promesa que se resuelva a los 2 segundos con el texto 'Resuelta cuando pasaron 2 segundos'

const Gpromise = new Promise ((resolve,reject) =>{
    setTimeout(() =>{
    resolve('resuelta cuando pasaron dos segundos')
},2000);
})

Gpromise.then(
    (data)=> {console.log(data)
    },
    (err) => {console.log(err)
    },
)

//crear una página que pinte un P con el texto 'hello timeout' a los 8 segundos.

const Hpromise = new Promise(( resolve, reject) =>{
    setTimeout(() =>{
    resolve( 'hello timeout')
},8000);
})

Hpromise.then(
    (data) => {
        const p = document.createElement('p');
        p.textContent = data;
        document.body.appendChild(p)
    },
    (error) => {
        console.log(error)
    },


)


//crear una página que pinte un P con el texto 'hello timeout' a los 8 segundos.

const Hpromise = new Promise(( resolve, reject) =>{
    setTimeout(() =>{
    resolve( 'hello timeout')
},8000);
})

Hpromise.then(
    (data) => {
        const p = document.createElement('p');
        p.textContent = data;
        document.body.appendChild(p)
    },
    (error) => {
        console.log(error)
    },


)
//En la página anterior crear un intervalo que pinte un p cada 500 ms con el texto 'conectando...'

const Ipromise = setInterval(() =>{const p1 = document.createElement('p');
p1.textContent = ('conectando...');
document.body.appendChild(p1)},
500);


//Colocar un botón en el navegador que al pulsarlo nos dibuje los números del 0 al 10. 
//Entre elemento y elemento debe transcurrir 0.5 segundos. Para poder parar un intervalo, necesitamos la función clearInterval

let contador =0


const boton = document.createElement('button');
document.body.appendChild(boton);

boton.addEventListener('click', e=>{ 
    let empezar = setInterval(() => {
        const p = document.createElement('p');
        contador = contador+1;
         p.textContent=contador;
         document.body.appendChild(p);
         if(contador === 10){clearInterval(empezar)}
        },500);
        
     }

    )

    
   //Crear una función que se ejecute cada 1 segundo y pinte en Html un reloj con el formato hh:mm:ss

const p1 = document.createElement('p');
document.body.appendChild(p1);

 setInterval(() =>{
    
//    p1.textContent=a.getHours() + ':'+a.getMinutes()+ ':' + a.getSeconds();
let hoy = new Date();
let minutos = hoy.getMinutes();
let segundos = hoy.getSeconds();
let hora = hoy.getHours();
p1.textContent = (hora > 9 ? hora : "0" + hora) 
       	 + ":" + (minutos > 9 ? minutos : "0" + minutos)
      		 + ":" + (segundos > 9 ? segundos : "0" + segundos);

    },100)

