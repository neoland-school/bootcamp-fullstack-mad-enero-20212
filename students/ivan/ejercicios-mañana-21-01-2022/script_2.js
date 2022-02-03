/*
2. Crear una página web que cree 100 divs de color #F47732.
 Modificar el ejercicio para que los divs pares se sean de 
 color #F47732 y los impares #1148F3. Modificar para que 
 se muestren sobre un contenedor flex. Podéis utilizar 
 cualquier tipo de bucle.

*/

// for(let i=1; i<=100;i++){
//     if(i%2===0){
//     document.write(`<div class="div__container-soon-1"></div>`);
//     }else{
//     document.write(`<div class="div__container-soon-2"></div>`);

//     }
// }

//Creo una variable string que me pinte todo. Esta contiene al contenedor padre
//con la clase div__container sobre el que iremos sumando los divs pares o impares.
let htmlOutput = `<div class="div__container">`
for(let i=1; i<=100;i++){
   //Utilizo un ternario para que elija una clase u otra en función de si es 
   //el div par o impar
   htmlOutput += `<div class=" ${i%2 === 0 ? "div__container-soon-1" : "div__container-soon-2"}" ></div>`;
}
htmlOutput += '</div> ' ;
document.write(htmlOutput);