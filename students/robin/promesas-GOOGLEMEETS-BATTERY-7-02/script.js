
// EJERCICIO 1 - 2


/*

const promise1 = new Promise ((resolve, reject) => {
    console.log('hola mundo');
    resolve()
    console.log('adios');
    reject()
    }
)

*/


// EJERCICIO 3


/*

const promiseRandom = new Promise (((resolve) => {
    function random(num){
        return Math.floor(Math.random()*num);
    }
    const p = document.createElement('p')
    p.textContent = random(10)
    document.body.appendChild(p)
    resolve(' este es el numero')
} ))

promiseRandom.then((msg) => {
    console.log(`hola usuario, ${msg}` )
})
*/

/*

const promiseRandomTen = new Promise ((resolve,reject) => {
    let random = Math.floor(Math.random(1)*10)

    if (random %2 === 0){
        resolve('es par')
       
    }else if (random % 2 !== 0){
        reject('no es par')
    }
    console.log(random)
    
})

promiseRandomTen.then(
    (data) => {
        console.log(data)
    },
    (err) => {
        console.log(err)
    }
)   

*/

// EJERCICIO 5

/*

const segundos = new Promise ((resolve,reject) => {
    setTimeout(() =>{
       console.log('2 segundos')
       resolve('2 segundos')
    },2000)
})

*/

// TIMERS 1-2

/*

const ochoSeg = new Promise ((resolve,reject) => {
    setTimeout(()=> {
        
        const p = document.createElement('p')
        document.body.appendChild(p)
        p.textContent = 'hello timeout'

        console.log('8 segundos')
        resolve('8 segundos')
    },8000 )

    setInterval(() => {
        const p2 = document.createElement('p')
        document.body.appendChild(p2)
        p2.textContent = 'conectando...'
        resolve('conectando')
    },500)
})

*/



// TIMERS 3

/*

function number (){
    let counter = 0;
   const btn = document.getElementById('btn');
   btn.addEventListener('click', e =>{
    setInterval(() => {
        const p = document.createElement('p')
        if(counter < 10 ){
            counter = counter +1
            p.textContent += counter;
            document.body.appendChild(p)
        }
        
        
    },500)
})
}

*/

// TIMERS 4

function clock (){
    let time = new Date();

    let hours = time.getHours().toString().length < 2 ? "0"+ time.getHours() : time.getHours();
    let minutes = time.getMinutes().toString().length < 2 ? "0"+ time.getMinutes() : time.getMinutes()
    let seconds = time.getSeconds().toString.length < 2 ? "0"+ time.getSeconds() :time.getSeconds()
    

    let goodTime = `${hours}: ${minutes}: ${seconds} `
  
    const timeClock = document.getElementById('time')

    timeClock.innerHTML = goodTime
}

setInterval(clock,1000)

clock()

