const watch = document.createElement('p');
watch.textContent = `0${hours}:0${minutes}:0${seconds}`;
document.body.appendChild(watch)

let formatSeconds = `0${seconds}`
let formatMinutes = `0${minutes}`
let formatHours  = `0${hours}`

function printWatch() {
    seconds++;
    if (seconds % 60 === 0) {
        minutes ++;
        seconds = 0;
    }
    if (minutes % 60 === 0 && minutes !== 0) {
        hours ++;
        minutes = 0;
    }
    if (seconds >= 10) {
        formatSeconds = `${seconds}`
    }
   if (minutes >= 10) {
        formatMinutes = `${minutes}`
    }
    if (hours >= 10) {
        formatHours = `${hours}`
    }
    watch.textContent = `0${formatHours}:0${formatMinutes}:0${formatSeconds}`;
}

setInterval(() => {
    printWatch();
}, 1000)