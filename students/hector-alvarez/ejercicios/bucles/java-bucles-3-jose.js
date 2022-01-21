
/*

3. Escribir un programa que solicite al usuario el número de filas y el número de columnas. Dibujar una tabla con las filas y columnas introducidas, usar etiquetas html " th, tr, td.."

1. 

*/


let filas
let columnas
let res = filas * columnas;

filas = prompt("Introduce numero de filas")
columnas = prompt("Introduce numero de columnas")

document.write("<table border>");

for (i = 0 ; i < filas; i++){
        document.write("<tr>");
        
        for (j = 0; j < columnas ; j++){
            document.write("<td>")
            document.write(res);
            
            document.write("</td>")
        }
        
        document.write("</tr>");
    }

    document.write("</table>")
