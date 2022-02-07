/*
3. Crear una página web que pinte por pantalla 
separado por comas las primeras 100 potencias de dos. 
Ejemplo: 1,2,4,8,16,32,64,...

*/
let n = 2;

for(let i=1; i<=100;i++){
   document.write(`${n}, `);
   n *= 2;
}
document.write(`<br />`)