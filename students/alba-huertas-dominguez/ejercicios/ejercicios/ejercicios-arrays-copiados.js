
///let numero= prompt('introduce un numero')
let numerito= Array.from(numero);
function circulitos (a){
    let contador= 0
    a.forEach(v=> {
        switch (v) {
            case '0':
                contador=contador+1;
                break;
            case '6':
                contador=contador+1;
                break;
            case '8': 
                contador= contador+2;
                break;
            case '9':
                contador=contador+1;
                break;
            default: contador=contador;
                break;
        }  
    });
    document.write(contador)
}
circulitos(numerito)
