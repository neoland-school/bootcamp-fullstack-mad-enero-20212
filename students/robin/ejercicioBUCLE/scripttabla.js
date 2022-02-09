

// 1.Solicitar filas y columnas
// 2. Dibnujar tabla con las filas y columnas introducidas.

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
            
            
            document.write("</td>")
        }
        
        document.write("</tr>");
    }

    document.write("</table>")