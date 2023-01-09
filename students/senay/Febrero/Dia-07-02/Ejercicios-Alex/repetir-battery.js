/**
 * 1. sacar la info de h2 level y p status
 * 2. sobreescribir los datos con los  actuales(mientras se carga, no carga y la bat actual) del dispositivo
 * 3. 
 */

const encabezadoLevel = document.querySelector('.battery__level');
const pStatus = document.querySelector('.battery__status');

navigator.getBattery().then((BatteryManegerNavigatorMetodoReturnsPromise) => { // 1
    encabezadoLevel.textContent = `${BatteryManegerNavigatorMetodoReturnsPromise.level*100}%`;
    pStatus.textContent = BatteryManegerNavigatorMetodoReturnsPromise.charging ? 'esta cargando' : 'no esta'; // no es asi

});