/*

2. Crear una página web que cree 100 divs de color #F47732. Modificar el ejercicio para que los divs pares se sean de color #F47732 y los impares #1148F3. Modificar para que se muestren sobre un contenedor flex. Podéis utilizar cualquier tipo de bucle.


*/


/*primera parte

for(let i=0; i<101; i++){
    document.write(`<div class="color-par"></div>`)
}

*/

/*parte 2

let i=0

for(i; i<101; i++){

  if(i%2) {
  document.write(`<div class="color-par"></div>`)
}
  else {
    document.write(`<div class="color-impar"></div>`)
  }
}

*/




let i=0

for(i; i<101; i++){

  if(i%2 === 0) {
  document.write(`<div class="color-par"></div>`)
}
  else {
    document.write(`<div class="color-impar"></div>`)
  }
}

