/*
1. Widget de estado de bateria. Vamos a crear un widget que nos 
indique el estado de la batería. Las imágenes de los diseños deben 
quedar así. Para poder obtener la información de la batería necesitamos
 la función navigator.getBattery
*/

const mainContainer = document.querySelector('.main-container');

navigator.getBattery().then(//escuchamos la promesa

    (battery) =>{

        if(battery.charging === true){

            const batteryStatus = document.querySelector('.main-container > div:first-child');
            batteryStatus.classList.add('battery-charging');

            //llamo a la funcion que pinta las cells,
            // las elimina y además contiene los intervalos para volver a crearlas
            loop();

            //creo el elemento i con el rayo
            const divChargeIcon = document.querySelector('.charge_icon');
            const chargeIcon = document.createElement('i');
            chargeIcon.classList.add('fa','fa-bolt');
            chargeIcon.setAttribute('aria-hidden','true');
            divChargeIcon.appendChild(chargeIcon);

            //leo el porcentaje de la batería y cambio el nombre
            const batteryLevel = document.querySelector('.battery_level');
            batteryLevel.textContent = `${battery.level*100}%`;

            const batteryState = document.querySelector('.battery_status');
            batteryState.textContent = 'Battery Charging';

        }else{

            if(battery.level<1 && battery.level>0.7){
                const batteryStatus = document.querySelector('.main-container > div:first-child');
                batteryStatus.classList.add('battery-charging');
                const batteryCell = document.querySelector('.battery_cell');
                for(let i=1;i<=4;i++){
                    const divBattMiniCell = document.createElement('div'); 
                    divBattMiniCell.classList.add('battery_mini-cell');
                    batteryCell.appendChild(divBattMiniCell);
                }
                 //creo el elemento i con la bateria llena
                const divChargeIcon = document.querySelector('.charge_icon');
                const chargeIcon = document.createElement('i');
                chargeIcon.classList.add('fa','fa-battery-full');
                chargeIcon.setAttribute('aria-hidden','true');
                divChargeIcon.appendChild(chargeIcon);

                //leo el porcentaje de la batería y cambio el nombre
                const batteryLevel = document.querySelector('.battery_level');
                batteryLevel.textContent = `${battery.level*100}%`;

                const batteryState = document.querySelector('.battery_status');
                batteryState.textContent = `${Math.floor(battery.dischargingTime/3600)} hours
                                                ${Math.floor((battery.dischargingTime/3600-Math.floor(battery.dischargingTime/3600))*60)} min remaining.`;
                
            }
            if(battery.level<=0.7 && battery.level>0.5){
                const batteryStatus = document.querySelector('.main-container > div:first-child');
                batteryStatus.classList.add('battery-charging');
                const batteryCell = document.querySelector('.battery_cell');
                for(let i=1;i<=3;i++){
                    const divBattMiniCell = document.createElement('div'); 
                    divBattMiniCell.classList.add('battery_mini-cell');
                    batteryCell.appendChild(divBattMiniCell);

                }
              //creo el elemento i con la bateria 3/4
              const divChargeIcon = document.querySelector('.charge_icon');
              const chargeIcon = document.createElement('i');
              chargeIcon.classList.add('fa','fa-battery-three-quarters');
              chargeIcon.setAttribute('aria-hidden','true');
              divChargeIcon.appendChild(chargeIcon);

               //leo el porcentaje de la batería y cambio el nombre
               const batteryLevel = document.querySelector('.battery_level');
               batteryLevel.textContent = `${battery.level*100}%`;

               const batteryState = document.querySelector('.battery_status');
               batteryState.textContent = `${Math.floor(battery.dischargingTime/3600)} hours
                                               ${Math.floor((battery.dischargingTime/3600-Math.floor(battery.dischargingTime/3600))*60)} min remaining.`;
               
            }    
            if(battery.level<=0.5 && battery.level>0.2){
                const batteryStatus = document.querySelector('.main-container > div:first-child');
                batteryStatus.classList.add('battery-charging');
                const batteryCell = document.querySelector('.battery_cell');
                for(let i=1;i<=2;i++){
                    const divBattMiniCell = document.createElement('div'); 
                    divBattMiniCell.classList.add('battery_mini-cell');
                    batteryCell.appendChild(divBattMiniCell);

                }
                //creo el elemento i con la bateria 1/4
                const divChargeIcon = document.querySelector('.charge_icon');
                const chargeIcon = document.createElement('i');
                chargeIcon.classList.add('fa','fa-battery-quarter');
                chargeIcon.setAttribute('aria-hidden','true');
                divChargeIcon.appendChild(chargeIcon);

                 //leo el porcentaje de la batería y cambio el nombre
               const batteryLevel = document.querySelector('.battery_level');
               batteryLevel.textContent = `${battery.level*100}%`;

               const batteryState = document.querySelector('.battery_status');
               batteryState.textContent = `${Math.floor(battery.dischargingTime/3600)} hours
                                               ${Math.floor((battery.dischargingTime/3600-Math.floor(battery.dischargingTime/3600))*60)} min remaining.`;
                               
            }
            if(battery.level<=0.2){
                const batteryStatus = document.querySelector('.main-container > div:first-child');
                batteryStatus.classList.add('battery-low');
                const batteryCell = document.querySelector('.battery_cell');

                const divBattMiniCell = document.createElement('div'); 
                    divBattMiniCell.classList.add('battery_mini-cell');
                    batteryCell.appendChild(divBattMiniCell);

                      //creo el elemento i con la alerta
                const divChargeIcon = document.querySelector('.charge_icon');
                const chargeIcon = document.createElement('i');
                chargeIcon.classList.add('fa','fa-exclamation');
                chargeIcon.setAttribute('aria-hidden','true');
                divChargeIcon.appendChild(chargeIcon);

                 //leo el porcentaje de la batería y cambio el nombre
               const batteryLevel = document.querySelector('.battery_level');
               batteryLevel.textContent = `${battery.level*100}%`;

               const batteryState = document.querySelector('.battery_status');
               batteryState.textContent = `Less than ${Math.floor(battery.dischargingTime/3600)} hours
                                               ${Math.floor((battery.dischargingTime/3600-Math.floor(battery.dischargingTime/3600))*60)} min remaining.`;
                               
            }          
        }
       }
);


function drawChargingCelss (){

    const batteryCell = document.querySelector('.battery_cell');

    const interval = setInterval(
        ()=>{
            const batteryMiniCell = document.createElement('div');
            batteryMiniCell.classList.add('battery_mini-cell');
            batteryCell.appendChild(batteryMiniCell);
        }, 1000);
        
        setTimeout(
            ()=>{
                window.clearInterval(interval);
            },4000);   
};

function loop(){
    drawChargingCelss ();
    const interval = setInterval(
        ()=> {
            drawChargingCelss ();
            const miniCells = document.querySelectorAll('.battery_mini-cell');
            miniCells.forEach((e,i,arr) => e.remove())    
        }, 4500);

};