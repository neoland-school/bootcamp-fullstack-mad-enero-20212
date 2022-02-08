let a = prompt('Introduzca un número aquí:')
const NUM = parseInt(a)


if (NUM % 2 === 0 && NUM >= 1 && NUM <= 10) {
    document.write(`<div class="container-3 box"></div>`)
}
else if (NUM >= 1 && NUM <= 10) {
    document.write(`<div class="container-1 box"></div>`)
} else if (NUM > 10 && NUM <= 50) {
    document.write(`<div class="container-2 box"></div>`)
}

document.write('<br>');



/* EJERCICIO 1 */
document.write("Ejercicio 1:")
document.write('<br>');
let num1 = prompt("Escriba aquí el primer número:");
let num2 = prompt("Escriba aquí el primer número:");
const NUMBER1 = parseInt(num1)
const NUMBER2 = parseInt(num2)

document.write("Numero 1: ", NUMBER1);
document.write('<br>');
document.write("Numero 2: ", NUMBER2);
document.write('<br>');
document.write("El mayor de ambos numeros es: ", Math.max(NUMBER1, NUMBER2) );
document.write('<br>');
document.write('<br>');



document.write("Ejercicio 2:")
document.write('<br>');

let idioma = prompt("Escoja un idioma: GER, ESP, ING, ITA, FRA o RUS")

switch (idioma) {
    case "GER":
        document.write("GUTEN MORGEN"); break;
    case "ESP":
        document.write("BUENOS DIAS"); break;
    case "ING":
        document.write("GOOD MORNING"); break;
    case "ITA":
        document.write("BUON GIORNO"); break;
    case "FRA":
        document.write("BONJOUR"); break;
    case "RUS":
        document.write("ДОБРОЕ УТРО"); break;
    default: document.write("GOOD MORNING"); break;
}

document.write('<br>');document.write('<br>');



/* EJERCICIO 3 */
document.write("Ejercicio 3:")
document.write('<br>');

let age = prompt("¿Qué edad tiene?")
const EDAD = parseInt(age);

document.write( ( EDAD >= 18 ) ? "Puede entrar" : "No puede entar" );


document.write('<br>');document.write('<br>');



/* EJERCICIO 4 */
document.write("Ejercicio 4:")
document.write('<br>');

let añobis = prompt("Escriba aquí un año:");
const AÑO = parseInt(añobis)

document.write(((AÑO % 4 === 0) && (AÑO % 100 != 0)) || (AÑO % 400 == 0) ? "Bisiesto" : "No bisiesto");

document.write('<br>');document.write('<br>');



/* EJERCICIO 5 */
document.write("Ejercicio 5:")
document.write('<br>');

let luz = prompt("Escoja la luz del semaforo: verde, ambar intermitente, ambar o rojo: ");

switch (luz) {
    case "verde":
        document.write( ` 
        <div class="container_semaforo">
            <div class="luces verde"></div>
            <div class="luces blanco"></div>
            <div class="luces blanco"></div>
         </div>`); 
        break;
    case "ambar intermitente":
        document.write(`  
        <div class="container_semaforo">
            <div class="luces blanco"></div>
            <div class="luces naranja"></div>
            <div class="luces blanco"></div>
        </div>`); 
        break;
    case "ambar":
        document.write(`  
        <div class="container_semaforo">
            <div class="luces blanco"></div>
            <div class="luces ambar"></div>
            <div class="luces blanco"></div>
        </div>`); 
        break;
    case "rojo":
        document.write(`  
        <div class="container_semaforo">
            <div class="luces blanco"></div>
            <div class="luces blanco"></div>
            <div class="luces rojo"></div>
        </div>`); 
        break;
    default: document.write("No ha introducido bien la luz, regarge la pagina y vuelva a intentarlo"); 
    break;
}

document.write('<br>');document.write('<br>');



/* EJERCICIO 6 */
document.write("Ejercicio 6:")
document.write('<br>');

let not1 = prompt("Introduce la nota del primer examen aquí:");
let not2 = prompt("Introduce la nota del segundo examen aquí:");
let not3 = prompt("Introduce la nota del tercer examen aquí:");
let not4 = prompt("Introduce la nota del cuarto examen aquí:");
let not5 = prompt("Introduce la nota del quinto examen aquí:");
let not6 = prompt("Introduce la nota del sexto examen aquí:");
let not7 = prompt("Introduce la nota del septimo examen aquí:");

const NOTA1 = parseInt(not1);
const APO1 = (NOTA1 >= 5) ? 1 : 0 ;
document.write("Nota 1 - ", NOTA1)
document.write('<br>');

const NOTA2 = parseInt(not2);
const APO2 = (NOTA2 >= 5) ? 1 : 0 ;
document.write("Nota 2 - ", NOTA2)
document.write('<br>');

const NOTA3 = parseInt(not3);
const APO3 = (NOTA3 >= 5) ? 1 : 0 ;
document.write("Nota 3 - ", NOTA3)
document.write('<br>');

const NOTA4 = parseInt(not4);
const APO4 = (NOTA4 >= 5) ? 1 : 0 ;
document.write("Nota 4 - ", NOTA4)
document.write('<br>');

const NOTA5 = parseInt(not5);
const APO5 = (NOTA5 >= 5) ? 1 : 0 ;
document.write("Nota 5 - ", NOTA5)
document.write('<br>');

const NOTA6 = parseInt(not6);
const APO6 = (NOTA6 >= 5) ? 1 : 0 ;
document.write("Nota 6 - ", NOTA6)
document.write('<br>');

const NOTA7 = parseInt(not7);
const APO7 = (NOTA7 >= 5) ? 1 : 0 ;
document.write("Nota 7 - ", NOTA7)
document.write('<br>');
document.write('<br>');

const TOTAPRO = (APO1 + APO2 + APO3 + APO4 + APO5 + APO6 + APO7)


const MEDIA = ((NOTA1 + NOTA2 + NOTA3 + NOTA4 + NOTA5 + NOTA6 + NOTA7)/7);
document.write("La nota media es: ", MEDIA)
document.write('<br>');

document.write( (TOTAPRO >= 5 && MEDIA >= 6 ? "Tiene derecho a beca" : "No tiene derecho a beca")  )

document.write('<br>');document.write('<br>');



/* EJERCICIO 7 */
document.write("Ejercicio 7:")
document.write('<br>');

let op1 = prompt("Introduzca aqui el primer numero:")
const OPC1 = parseInt(op1)

let op2 = prompt("Introduzca aqui el operador +, -, * o /: ")

let op3 = prompt("Introduzca aqui el segundo numero:")
const OPC3 = parseInt(op3)

const SUMA = (OPC1 + OPC3);
const RESTA = (OPC1 - OPC3);
const MULT = (OPC1 * OPC3);
const DIVI = (OPC1 / OPC3);

switch (op2) {
    case "+":
        document.write(`${OPC1} + ${OPC3} = `, SUMA); break;
    case "-":
        document.write(`${OPC1} - ${OPC3} = `, RESTA); break;
    case "*":
        document.write(`${OPC1} * ${OPC3} = `, MULT); break;
    case "/":
        document.write(`${OPC1} / ${OPC3} = `,DIVI); break;
    default: document.write("Se ha cometido un error introduciendo los comandos, intentelo de nuevo"); break;
}