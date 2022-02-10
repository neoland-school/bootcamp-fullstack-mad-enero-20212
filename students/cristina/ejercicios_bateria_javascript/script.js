'use.strict';


//Sin acabar todavía


const divContainer = document.querySelector('.pila_inferior');

let AnimationDivs;
let contador = 0

function createDiv() {
    let lineDiv = document.createElement('div');
    lineDiv.className = ('linea');
    divContainer.appendChild(lineDiv);
}

function clear() {
    const divC = document.querySelectorAll('.linea');
    divC.forEach(c => c.remove());
    contador = 0
}

function batteryLine() {
    AnimationDivs = setInterval(() => {
        if (contador > 4) {
            clear()
        }
        createDiv();
        contador++
    }, 800)
}


function stopCreateDiv() {
    clearInterval(AnimationDivs)
}


const divInferior = document.querySelector('.parte_inferior');
const levelBat = document.querySelector('.battery_number');
let descriptonBat = document.querySelector('.battery_description');

function LevelPrint(batteryLevel) {
    levelBat.textContent = `${batteryLevel * 100}%`;      
}

const ciculo = document.querySelectorAll('.circle')

navigator.getBattery().then((battery) => {
    LevelPrint(battery.level);
    

    descriptonBat.textContent = battery.charging
        ? "Cargando Batería"
        : "Estado de la carga";

    battery.addEventListener("chargingchange", () => {

        if (battery.charging) {
            descriptonBat.textContent = "Cargando Batería"
            batteryLine()
            

        } else {
            descriptonBat.textContent = "Estado de la carga"
            stopCreateDiv()
           
            /* batteryLineStop(batteryLevel) */

            if(battery.level <= 0.2){
                DivsCount = 0;
            }else if(battery.level > 0.2 && battery.level <= 0.4){
                DivsCount = 1;
            }else if(battery.level > 0.4 && battery.level <= 0.6){
                DivsCount = 2;
            }else if(battery.level > 0.6 && battery.level <= 0.8){
                DivsCount = 3;
            }else if(battery.level > 0.8){
                DivsCount = 4;
            }
        
            for (let i = 0; i < DivsCount; index++) {
                
                
            }
    
        }

    });

    battery.addEventListener("levelchange", () => {
        LevelPrint(battery.level)

    });
});

