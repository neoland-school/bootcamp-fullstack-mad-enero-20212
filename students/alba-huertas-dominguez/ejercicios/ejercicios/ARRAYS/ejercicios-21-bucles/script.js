


        for(let p=0;p <100; p++){
            document.write(Math.pow(2,p)+"<br>");
        
        
        
        }





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
























    