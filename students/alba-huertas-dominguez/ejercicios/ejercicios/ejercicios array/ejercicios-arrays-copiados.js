
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


let position = [1,30,56,81,115,87,97]
let num = 88
let result =parseFloat("")

function np (position){
    for( let i=0; i<position.length; i++){
        if(position[i]==num){ result=i
        }
    }; return result;
       
}
if(result=0){result=-1};


document.write(np(position));
document.write(result);