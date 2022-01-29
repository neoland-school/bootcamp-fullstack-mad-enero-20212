let answerN = prompt("Escribe un número")
let numberQ= parseInt(answerN)
let isNumber=numberQ>10&&numberQ


// da verdadero si estra entre cero y 10//


if(numberQ < 10 && numberQ > 0){document.write("<div class=container1></div>")
}else{document.write("adios")
};


decir el numero maximo de entre dos numeros que preguntes:

let QOne = parseInt(prompt("pon número"))
let QTwo = parseInt(prompt("pon número"))

document.write(
    Math.max(
        QOne,QTwo));


deicr hola en diferentes idiomas:

        let i="hello";
let e="hola";
let f="bonjour";

let idioma = prompt("Elige un idioma entre ingles,español y frances");



if(idioma==="español"){document.write(e)    ;
}else if(idioma==="frances"){document.write(f);
}else{document.write(i)
};


utilizar el operador ternario para ver si puedo entrar en una discoteca o no:

let edad= parseInt(prompt("pon tu edad"));

let b=edad>=18?"Si puedes entrar":"No puedes entrar";

document.write(b);

utilizar el operador ternario para saber si un año es bisiesto o no.

año bisiesto:

let bisiesto= parseInt(prompt("pon un año"));

document.write(
bisiesto % 4 == 0 && bisiesto % 100 != 0  || bisiesto % 400 === 0 ? "Es un año bisiesto":"No es un año bisiesto"
)


hacer un semaforo utilizando tambien CSS;

const SEMAFORO=prompt("color del semaforo?");

if( SEMAFORO === "rojo"){document.write('<div class=container1>rojo</div>');
}else if(SEMAFORO ==="verde"){document.write('<div class=container2>verde</div>');
}else if (SEMAFORO === "ambar"){document.write('<div class=container3>ambar</div>');
}else{document.write('<div class=container4>ambar intermitente</div>');
}


ejercicio con un switch:
con pasos (hacer una calculadora):
/* 
1. solicitar al usuario el operando 1 y procesar su tipo de datos.
2. solicitar al usuario la operacion y procesar su tipo de datos, guardandola en una variable.
3. solicitar al usuario el operando 2 y procesar su tipo de datos.
4. en caso de que la operacion sea:
        a: +, pintaremos la suma
        b: -, pintaremos la resta,
        c. * , pintaremos la multiplicacion
        d. /, pintaremos la division
        e. en otro caso indicaremos al usuario la operacion que no se reconoce.

*/

const OP1 = parseFloat(prompt('introduzca el operando 1'));
const OPERATION = prompt('introduzca la operacion. suma, resta, mult, division');
const OP2 = parseFloat(prompt('introduzca el operando 2'));
const RESULT= `${OP1} ${OPERATION} ${OP2} =`;

/* voy a añadir una validacion con el if y el NAN (no es numero), para que solo ponga numero */
if(!isNaN(OP1) && !isNaN(OP2)){;


switch(OPERATION){
        case '+': document.write(`${OP1} ${OPERATION} ${OP2} = ${OP1+OP2}`) ;  break;
        case '-' : document.write(`${RESULT}`); break;
        case '*': document.write(); break;
        case '/': document.write(); break;
        default: document.write('<h1>operacion no reconocida</h1>');
}
}else{
 document.write( ' las operaciones tienen que ser con numeros')


}






const SEMAFORO=prompt("color del semaforo?");

if( SEMAFORO === "rojo"){document.write('<div class=container1>Está en rojo, no puedes pasar</div>');
}else if(SEMAFORO ==="verde"){document.write('<div class=container2>Adelante, está en verde</div>');
}else if (SEMAFORO === "ambar"){document.write('<div class=container3>Cuidado, está en ambar</div>');
}else{document.write('<div class=container4>Está en ambar intermitente</div>');
}

