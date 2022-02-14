/*
3. Escribir un programa que solicite 
al usuario el número de filas y el número
 de columnas. Dibujar una tabla con las
  filas y columnas introducidas, usar 
  etiquetas html " th, tr, td.."

*/

const ROWS = parseInt(prompt('Indique el número de filas'));
const COLUMN = parseInt(prompt('Indique el número de columnas'));

document.write(`<table>`);
        for(let i= 0; i<ROWS ; i++){
          document.write(`<tr>`);
            for(j=0; j<COLUMN; j++){
              document.write(`<td>Fila ${i+1} columna ${j+1}</td>`);
            }
        }
        document.write(`</tr>`);
        
            


document.write(`</table>`);