
/* Registrar que quiero reaccionar al cambio de nivel, puede ser un evento?
Cuando se produzca el cambio de nivel tengo que actualizar el html con el nuevo nivel.

*/




'use.strict'
let batteryIsCharging = true;
const bateria = document.querySelector(".nivelbateria")
const mensaje = document.querySelector(".mensajebateria")
let cargar;
let counter =0



function borrar() {

    const divs = document.querySelectorAll('.divc');
    divs.forEach(c => c.remove());
    counter = 0

}




function pintar(battery) {

    if (batteryIsCharging === true) {
        mensaje.textContent = "esta cargando";
        bateria.textContent = battery.level * 100 + "%";
        const divpila = document.querySelector(".imagen-g");

        cargar = setInterval(() => {
            if (counter > 3) {
                borrar()

            } else {
                const divp = document.createElement('div');
                divp.classList.add('divc');
                divpila.appendChild(divp);
                counter++;
                console.log(counter)
            }

        }, 500);

    }
}


function fijo(battery) {
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
    for (let i = 0; i < celdas; i++) {
        const divpila = document.querySelector(".imagen-g");
        const divf = document.createElement('div');
        divf.classList.add('divc');
        divpila.appendChild(divf);


    }



}
;

navigator.getBattery().then(battery => {
    console.log(battery.level)
    batteryIsCharging = battery.charging;
    if(battery.charging ===true){

    pintar(battery);
    } else{ fijo(battery)};
    
    battery.onlevelchange = () => {
        bateria.textContent = battery.level * 100 + "%";

    }
        ;
    battery.addEventListener("chargingchange", () => {
        mensaje.textContent = battery.charging
            ? "esta cargando"
            : "no esta cargando"
        clearInterval(cargar)
        borrar()

        if (battery.charging) {

            pintar(battery)

        } else {

            fijo(battery)
        }


    });
});


