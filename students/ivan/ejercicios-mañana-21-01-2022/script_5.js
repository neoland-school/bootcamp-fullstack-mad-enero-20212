/*
4. Crear una página web que solicite al 
usuario Crear una página web que solicite
 al usuario 1 número (n) y cree en HTML 
 un tablero de ajedrez de nxn, teniendo 
 en cuenta los colores como en el ajedrez.

*/
const DIMENSION_CHESS = parseInt(prompt(`Ingrese las dimensiones del tablero de ajedrez.`));

for(let i=1; i<=DIMENSION_CHESS; i++){
   document.write(`<div class="chess__board-row">`);
   if(i%2 != 0){
      for(let j=1; j<=DIMENSION_CHESS; j++){

         if(j%2 !=0){
            document.write(`<div class="chess__board-colum bg__whithe"></div>`);

         }else{
            document.write(`<div class="chess__board-colum bg__black"></div>`);

         }

      }
      
   }else{
      for(let j=1; j<=DIMENSION_CHESS; j++){

         if(j%2 !=0){
            document.write(`<div class="chess__board-colum bg__black"></div>`);

         }else{
            document.write(`<div class="chess__board-colum bg__whithe"></div>`);

         }

      }
       }

   document.write(`</div>`);

}



