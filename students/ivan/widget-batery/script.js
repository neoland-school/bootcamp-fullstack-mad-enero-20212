/*
Aplicación web para mostrar la información de la bateria


*/

/**
 * 1- Mostrar la informacion actual sin reaionar a cambios de estad de la batería
 *      a. Buscar en el HTML donde pondré la informacion
 *          a.1 Porcentaje de la batería --> <h2 class="battery_level"></h2>
            a.2 Si está cargando o no --> <p class="battery_status"></p>
 * 
 *      b. Poner el valor actual del level de la bateria en el HTML que toca (<h2 class="battery_level"></h2>)
 *              
 * 2- Si el nivel de la bateria cambia mostrarlo en el HTML (reaccionar al cambio de nivel)
 *      2.a - registrar que quiero reaccionar al cambio de nivel ()
 *      2.b - cuando se produzca el evento, actualizar el HTML con el nuevo nivel de bateria
 * 
 * 3- Si el estado de la batería cambia mostraarlo en el HTML (reaccionar al cambio de estado) 
 *      3.a - registrar que quiero reaccionar al cambio de estado ()
 *      3.b - cuando se produzca el evento, actualizar el HTML con el nuevo estado
 * 
 * 4- Pintar en la pila del battery_cell el nivel de bateria adecuado
 *      4.a El nivel de la bateria
 *      4.b ¿cuantas celdas muestro en función del nivel de bateria?
 *              - muestro 1 celda cuando el nivel de bateria sea < 20%
 *              - muestro 2 celdas cuando el nivel de bateria este entre 20 y 50
 *              - muestro 3 celdas cuando el nivel de bateria este entre 50 y 70
 *              - muestro 4 celdas cuando el nivel de bateria este entre 70 y 100
 *      4.c Pintar en el HTML un div  con la clase (battery_cell) y añadirlo al div de la clase (.battery-charging) o (.battery-low)
 * 
 * 
 */

        const batteryBodyDOM = document.querySelector('.battery_body');
        const batteryLevelDOM = document.querySelector('.battery_level');
        const batteryStatusDOM = document.querySelector('.battery_status');
        const batteryCellDOM = document.querySelector('.battery_cell');
        const divChargeIcon = document.querySelector('.charge_icon');
        let chargingAnimationID; /// id del intervalo de animación
        let cellCounter = 1;

        const NUM_CELLS = 4;

const restartBatteryCells = () => {//función que borra todos los divs de carga
            const cells = document.querySelectorAll(".battery_mini-cell");
            cells.forEach((c) => c.remove());
            cellCounter = 1;
};

const restartIcons = () => {//función que borra todos los iconos de carga antes de pintarlos de nuevo

            const icons = document.querySelectorAll('svg');
            icons.forEach(e => e.remove());
}

const startChargingAnimation = () => { //función que empieza mi animación en las celdas cuando está cargando la bateria
    chargingAnimationID = setInterval(() => {
      if (cellCounter > 4) { //cuando ya ha pintado 4 divs le digo que la elimine
        restartBatteryCells();
      }
      const cell = document.createElement("div");
      cell.classList.add("battery_mini-cell");
      batteryCellDOM.appendChild(cell);
      cellCounter++;
    }, 500);
  };

  const stopChargingAnimation = () => { //función que para la animación de las celdas
    clearInterval(chargingAnimationID);
  };

function printBatteryLevel(battery) {//función que pinta mis cells en función del nivel de bateria
            batteryLevelDOM.textContent = `${battery.level * 100}%`; // 1.b.1.2
            
            const cellsCount = Math.ceil(battery.level * NUM_CELLS); // 4.b
            /* VERSION SIN MATEMATICAS
            if(battery.level > 0.2 && battery.level <= 0.4){ // 4.b
                cellsCount = 2;
            }else if(battery.level > 0.4 && battery.level <= 0.6){
                cellsCount = 3;
            }else if(battery.level > 0.6 && battery.level <= 0.8){
                cellsCount = 4;
            }else if(battery.level > 0.8){
                cellsCount = 5;
            }
            */
            if(battery.charging){
                const chargeIcon = document.createElement('i');
                chargeIcon.classList.add('fa','fa-bolt');
                chargeIcon.setAttribute('aria-hidden','true');
                divChargeIcon.appendChild(chargeIcon);
            }else{
                for (let i = 0; i < cellsCount; i++) {
                    // 4.c
                    const div = document.createElement("div");
                    div.classList.add("battery_mini-cell");
                    batteryCellDOM.appendChild(div);
                  }
      
                  if(cellsCount===1){
                  //que me pinte el icono correspondiente y me asigne la subclase para pintar el color del div
                     
                  //asigno la subclase de color rojo al div de la bateria y al del icono
                  batteryBodyDOM.classList.add('battery_body-low');
                  divChargeIcon.classList.add('battery_body-low');
                  //creo el elemento i con la alerta 
                      const chargeIcon = document.createElement('i');
                      chargeIcon.classList.add('fa','fa-exclamation');
                      chargeIcon.setAttribute('aria-hidden','true');
                      divChargeIcon.appendChild(chargeIcon);
                  }else if(cellsCount===2){
                  //asigno la subclase de color naranja al div de la bateria y al del icono
                      batteryBodyDOM.classList.add('battery_body-half');
                      divChargeIcon.classList.add('battery_body-half');
                      //creo el elemento i con la alerta 
                      const chargeIcon = document.createElement('i');
                      chargeIcon.classList.add('fa','fa-battery-quarter');
                      chargeIcon.setAttribute('aria-hidden','true');
                      divChargeIcon.appendChild(chargeIcon);
                  }else if(cellsCount===3){
                      //asigno la subclase de color verde(por defecto) al div de la bateria y al del icono
                      
                      //creo el elemento i con la alerta 
                      const chargeIcon = document.createElement('i');
                      chargeIcon.classList.add('fa','fa-battery-three-quarters');
                      chargeIcon.setAttribute('aria-hidden','true');
                      divChargeIcon.appendChild(chargeIcon);
                  }else if(cellsCount===4){
                      //asigno la subclase de color verde(por defecto) al div de la bateria y al del icono
                      
                      //creo el elemento i con la alerta 
                      const chargeIcon = document.createElement('i');
                      chargeIcon.classList.add('fa','fa-battery-full');
                      chargeIcon.setAttribute('aria-hidden','true');
                      divChargeIcon.appendChild(chargeIcon);
                  }
      
            }
          };

navigator.getBattery().then(
    
    (battery) => { 

        batteryLevelDOM.textContent = `${battery.level*100}%`
        batteryStatusDOM.textContent = battery.charging ? 'Battery Charging' : `${Math.floor(battery.dischargingTime/3600)} hours 
                                                                                ${(Math.floor(battery.dischargingTime/3600-Math.floor(battery.dischargingTime/3600))*60)} min  remaining`

       if(battery.charging){
        printBatteryLevel(battery);
        cellCounter=4;
        startChargingAnimation();

       }else{
        printBatteryLevel(battery);
        
       }
 // battery.onlevelchange = () => { // función que se ejecuta cuando cambie el nivel de batería
        //     //pinto de nuevo el resultado
        //     batteryLevelDOM.textContent = `${battery.level*100}%`
        //     batteryStatusDOM.textContent = battery.charging ? 'Battery Charging' : `${Math.floor(battery.dischargingTime/3600)} hours 
        //                                                                             ${(Math.floor(battery.dischargingTime/3600-Math.floor(battery.dischargingTime/3600))*60)} min  remaining`
        //     }
        //tambien se puede hacer con un adeventlistener
            battery.addEventListener('levelchange', () =>{
                batteryLevelDOM.textContent = `${battery.level*100}%`
                batteryStatusDOM.textContent = battery.charging ? 'Battery Charging' : `${Math.floor(battery.dischargingTime/3600)} hours 
                                                                                        ${(Math.floor(battery.dischargingTime/3600-Math.floor(battery.dischargingTime/3600))*60)} min  remaining` 
            });
            //evento que escucha los cambios de estad de la bateria
            battery.addEventListener('chargingchange', () =>{
               
                if(battery.charging){
                    restartBatteryCells();
                    printBatteryLevel(battery);
                    restartIcons();
                    cellCounter=5;
                    startChargingAnimation();

                   }else{
                    restartBatteryCells();
                    restartIcons();
                    printBatteryLevel(battery);
                    stopChargingAnimation();

                   }
                batteryLevelDOM.textContent = `${battery.level*100}%`
                batteryStatusDOM.textContent = battery.charging ? 'Battery Charging' : `${Math.floor(battery.dischargingTime/3600)} hours 
                                                                                        ${(Math.floor(battery.dischargingTime/3600-Math.floor(battery.dischargingTime/3600))*60)} min  remaining` 
    
                
            });

        
});

