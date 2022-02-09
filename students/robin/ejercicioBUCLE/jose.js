let multi 
multi = prompt("introduzca numero que quiera multiplicar")

let i = 1;
let resultado = 0;

while(i <=10){
    resultado= i*multi;
    document.write(multi + "*" + i + "=" + resultado + " ");
    i++
}

