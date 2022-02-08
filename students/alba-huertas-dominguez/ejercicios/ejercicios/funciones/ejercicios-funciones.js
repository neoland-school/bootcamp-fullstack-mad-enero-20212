

//(Medium) Escribir una función que dado un número, 
///indique si este es capicua o no. Un 
//numero es capicua si se lee igual de izquierda a derecha que de derecha a izquierda. EJ. 1221


let num= prompt("dime un numero")

function numC (a){
    let reverse="";
    for( let i=num.length;i>=0; i--){
    reverse+=a.charAt(i)

}return reverse === num
}

document.write(numC(num))

if(reverse === num){document.write("el numero es capicua")
}else{document.write("el numero no es capicua")}




