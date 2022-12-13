'use.strict'
let batteryIsCharging = true;
const bateria = document.querySelector(".nivelbateria") 
const mensaje = document.querySelector(".mensajebateria")

navigator.getBattery().then(battery => {
    batteryIsCharging = battery.charging;
    bateria.textContent = battery.level * 100 + "%";
    mensaje.textContent = battery.charging;
    if (batteryIsCharging === true ) {
        mensaje.textContent = "Su dispositivo se está cargando";
        const divpila = document.querySelector(".imagen-g") ;
        counter=0
    let cargar = setInterval(() => {
            const divp= document.createElement('div');
            divp.classList.add('divc');
            divpila.appendChild(divp);
            counter++;
            if(counter === 5){
                const divs= document.querySelectorAll('.divc');
                divs.forEach(c => c.remove());
                counter = 0}
        },500);
    }
    else { mensaje.textContent = "No está cargando" };
    battery.onlevelchange = () => {
        bateria.textContent = battery.level * 100 + "%";
        








    }
    ;
    battery.onchargingchange = () => { if(battery.onchargingchange=== true){
        mensaje.textContent ="Su dispositivo se está cargando"}
        else{mensaje.textContent ="No está cargando"

        }

    }
});



// problema 1. no se parar el evento cuando esta cargando.

// problema 2. construir divs en funcion del nivel fijo de la bateria.

// problema 3. cambiar el color en funcion del nivel de la bateria.

