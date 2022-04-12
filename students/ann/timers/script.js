//1
const printHelloTimeOut = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello Timeout')
    }, 8000)
})

printHelloTimeOut.then((value) => {
    const textToPrint = document.createElement('p');
    textToPrint.textContent = value;
    document.body.appendChild(textToPrint);
})

//2
const every500ms = setInterval(() =>{
    const textToPrint = document.createElement('p');
    textToPrint.textContent = 'Connecting...';
    document.body.appendChild(textToPrint);
}, 500)

//3
const printNumbersButton = document.createElement('button');
printNumbersButton.textContent = 'start printing numbers from 0 to 10 every 1/2 second';
document.body.appendChild(printNumbersButton);

let num = 0;

printNumbersButton.addEventListener('click', () => {
    const print = setInterval(() => {
        const number = document.createElement('p');
        number.textContent = num;
        document.body.appendChild(number);
        num ++
        if (num > 10) {
            clearInterval(print);
        }
    }, 500)
    
})

//4

let seconds = 0;
let minutes = 0;
let hours = 0;

let formatSeconds = `${seconds}`
let formatMinutes = `${minutes}`
let formatHours  = `${hours}`

const watch = document.createElement('p');
watch.textContent = `0${hours}:0${minutes}:0${seconds}`;
document.body.appendChild(watch)

function startWatch() {
    seconds++;
    if (seconds % 60 === 0) {
        minutes ++;
        seconds = 0;
    }
    if (minutes % 60 === 0 && minutes !== 0) {
        hours ++;
        minutes = 0;
    }
    if (seconds < 10) formatSeconds = `0${seconds}`
    else formatSeconds = `${seconds}`
    
    if (minutes < 10) formatMinutes = `0${minutes}`
    else formatMinutes = `${minutes}`
    
    if (hours < 10) formatHours = `0${hours}`
    else formatHours = `${hours}`
    
    watch.textContent = `${formatHours}:${formatMinutes}:${formatSeconds}`;
}


setInterval(() => {
    startWatch();
}, 1000)