'use.strict'
let batteryIsCharging = true;
const bateria = document.querySelector(".nivelbateria")
const mensaje = document.querySelector(".mensajebateria")
let cargar;
navigator.getBattery().then(battery => {
    console.log(battery.level)
    batteryIsCharging = battery.charging;
    battery.onlevelchange = () => {
        bateria.textContent = battery.level * 100 + "%";

    }
        ;

   

    if (batteryIsCharging === true) {
        mensaje.textContent = "esta cargando";
        bateria.textContent = battery.level * 100 + "%";
        const divpila = document.querySelector(".imagen-g");
        counter = 0
         cargar = setInterval(() => {
            const divp = document.createElement('div');
            divp.classList.add('divc');
            divpila.appendChild(divp);
            counter++;
            if (counter === 5) {
                const divs = document.querySelectorAll('.divc');
                divs.forEach(c => c.remove());
                counter = 0
            }
        }, 500);
    } else {
        mensaje.textContent = "no esta cargando";
        bateria.textContent = battery.level * 100 + "%";

        let celdas = 0
        if (battery.level > 0.2 && battery.level <= 0.4) {
            celdas = 1;
        } else if (battery.level > 0.4 && battery.level <= 0.6) {
            celdas = 2;
        } else if (battery.level > 0.6 && battery.level <= 0.9) {
            celdas = 3;
        } else if (battery.level > 0.9) {
            celdas = 4;

         }
        for (let i = 0; i <celdas; i++) {
            const divpila = document.querySelector(".imagen-g");
            const divf = document.createElement('div');
            divf.classList.add('divc');
            divpila.appendChild(divf);
       

        }
       
    

    }
    ;
    battery.addEventListener("chargingchange", () => {
        mensaje.textContent = battery.charging
            ? "esta cargando"
            : "no esta cargando"

            if(battery.charging === false) clearInterval(cargar);
            
    });
});

