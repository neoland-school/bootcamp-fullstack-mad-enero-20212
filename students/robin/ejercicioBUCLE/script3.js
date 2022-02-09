let vocals = "aeiouAEIOU"
let vCount = 0;

let palabra
palabra = prompt("Introduzca Palabra")

for(i = 0 ; i < palabra.length ; i++){
    if (vocals.indexOf(palabra[i]) !== -1) {
        vCount +=1;
    }
}

document.write(" <p>Tu palabra tiene "  + vCount + " vocales </p>" );