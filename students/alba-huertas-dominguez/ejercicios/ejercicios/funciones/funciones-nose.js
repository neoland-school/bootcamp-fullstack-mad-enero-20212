
//(Easy) Crear una función que dado un string me devuelva el caracter que hay en la mitad
//(o el anterior a la mitad en caso de que sea par). Solicitar el string al usuario. EJ: radar --> d; hola --> o

//. pedir una palabra
//. contar los caracteres y dividirlo entre dos
//. hacer el redondeo a la baja de eso
//. pedir ese numero de caracter con el chart at.

let word = prompt("dime una palabra");
let cword= word.length;


function Letter(nc){
    let character=math.ceil((cword/2)-1)
    return(nc.charAt(character))
}



let word = prompt("dime una palabra");
let cword= word.length;


function Letter(nc){
    let character=((cword-1)/2)
    return document.write(word.charAt(character))
}

Letter(word)

document.write(`${Letter(nc)}`);

let str= prompt('introduce una palabra');
function mitad (a){
    
    return document.write( a.charAt((a.length-1)/2));
}


mitad(str);





let word = prompt("dime una palabra");
let cword= word.length;


function Letter(nc){
    let character=cword-1/2
    return document.write (word.charAt(character));
}

Letter(nc);




// (Easy) Crear una función que dado un string me devuelva un string invertido. Solicitar el string al usuario. EJ: hola -> aloh


