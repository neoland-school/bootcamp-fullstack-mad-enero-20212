// Crea un programa que dado dos números mediante prompt imprima el mayor de ellos por pantalla.

document.write('<h2>Ejercicio-1</h2>');

let n1 = prompt('Por favor escriba un numero;') // 10
let n2 = prompt('Por favor escriba otro numero;') // 7
    // let result = n1 == n2; 


if (n1 > n2) {
    document.write(`El numero ${n1} es mayor que ${n2}`);
} else if (n1 < n2) {
    document.write(`De los numeros introducidos ${n1} es menor que ${n2}`);
}


document.write('<h2>Ejercicio-2</h2>');

let preferencias = prompt('Que idioma prefieres: ingles, frances o español');

switch (preferencias) {
    case 'frances':
        {
            document.write('<p>Bonjour</p>');
            break
        }
    case 'español':
        {
            document.write('<p>Hola</p>');
            break
        }
    default:
        {
            document.write('<p>Hello</p>');
            break
        }
}

document.write('<h2>Ejercicio-3</h2>');


// Crea un algoritmo que te imprima por pantalla,  si tienes la edad suficiente para entrar a 
// un local nocturno o no, el algoritmo debe usar operador ternario.



let edad = prompt('¿Cuantos años tienes?');
let result = edad;

result = (edad >= 18) ? "Eres mayor de edad y puedes entrar a divertite" : "Eres menor, vete a casa!!!";
document.write(result);


document.write('<h2>Ejercicio-4</h2>');
/*
Crea un algoritmo para determinar si un año es bisiesto o no, para esto el año que se pase por prompt 
debera ser divisible entre 4 y no divisible entre 100, o ser divisible entre 400, del resto seria un año 
común, para este algormitmo usaremos operador ternario, pinta por pantalla el resultado.
*/

let año = prompt('Ingresa el año para saber si ha sido bisiesto');
let bisiesto = año;


bisiesto = (año % 4 === 0 ? año % 400 === 0 : año % 100 === 0);

document.write(`El año ${año} fue bisiesto?`);

document.write('<h2>Ejercicio-5</h2>');

/*
La luz de trafico puede ser 'verde',  " ambar intermitente", "ambar"  o "rojo". Crea un algoritmo que 
dado la luz de tráfico actual por prompt, pinte por pantalla  un semaforo  con la luz indicada y que 
indique si el coche puede pasar o debe parar.
*/
let luz = prompt('¿Cual es la luz del semaforo? verde, ambar, intermitente-ambar o rojo');

switch (luz) {
    case 'verde':
        {
            document.write('<div class="verde"></div>');
            document.write('<p>Puedes pasar.</p>');
            break
        }
    case 'ambar':
        {
            document.write('<div class="ambar"></div>');
            document.write('<p>Recomendaria no pasar en AMARILLO.</p>');
            break
        }
    case 'intermitente-ambar':
        {
            document.write('<div class="intermitente-ambar"></div>');
            document.write('<p>Puedes pasar si no hay peatones.</p>');
            break
        }
    case 'rojo':
        {
            document.write('<div class="rojo"></div>');
            document.write('<p>No puedes pasar.</p>');
            break
        }
}

document.write('<h2>Ejercicio-6</h2>');
/*
Creemos un algoritmo para saber si un estudiante puede optar o no a una beca, para eso debera pasar  
mediante prompt un total de 7 calificaciones, y se debara imprimir por pantalla la cantidad de 
asignaturas aprobadas, la nota media y si puede optar o no a la beca, para saber si un estudiante puede 
optar a la beca deberá tener el mínimo de asignaturas aprobadas( solo puede tener dos reprobadas,  
usar operador de asignación para esta operación), y una nota media superior a 6, 
PD:" la nota mínima para aprobar una asignatura  es de 5".
*/
// let asignaturas = prompt('Ingrese si has aprobado las 7 asignaturas requeridass.');
// let resultAsignaturas = asignaturas;

// let subjectNotasAcc = 0; // inicio acumulador de notas
// let subjectPassCount = 0; // inicio acumulador de asignaturas aprobadas
// let currentSubjectNotes = parseFloat(prompt('Ingrese la nota de las 7 asignaturas requeridass.'));

let accnotas = 0;
let accasignaturas = 0;
let usuario;

usuario = parseFloat(prompt('Pon tus notas'));
if (!isNaN(usuario)) {
    accnotas += usuario;
    accasignaturas += usuario >= 5 ? 1 : 0;
}

usuario = parseFloat(prompt('Pon tus notas'));
if (!isNaN(usuario)) {
    accnotas += usuario;
    accasignaturas += usuario >= 5 ? 1 : 0;
}

usuario = parseFloat(prompt('Pon tus notas'));
if (!isNaN(usuario)) {
    accnotas += usuario;
    accasignaturas += usuario >= 5 ? 1 : 0;
}

usuario = parseFloat(prompt('Pon tus notas'));
if (!isNaN(usuario)) {
    accnotas += usuario;
    accasignaturas += usuario >= 5 ? 1 : 0;
}

usuario = parseFloat(prompt('Pon tus notas'));
if (!isNaN(usuario)) {
    accnotas += usuario;
    accasignaturas += usuario >= 5 ? 1 : 0;
}

usuario = parseFloat(prompt('Pon tus notas'));
if (!isNaN(usuario)) {
    accnotas += usuario;
    accasignaturas += usuario >= 5 ? 1 : 0;
}

usuario = parseFloat(prompt('Pon tus notas'));
if (!isNaN(usuario)) {
    accnotas += usuario;
    accasignaturas += usuario >= 5 ? 1 : 0;
}
document.write(`<p>La cantidad de asignaturas aprobadas es ${accasignaturas}</p>`);
document.write(`<p>La nota media es ${accnotas/7}</p>`);
document.write(`<p>Pude optar a la beca? ${(accasignaturas >=5) && (accnotas/7) >=6}</p>`);

document.write('<h2>Ejercicio-7</h2>');

/*
Vamos a crear una calculadora que haga las operaciones basicas de suma, resta, multiplicación y división, 
en este caso usaremos el condicional SWITCH,  el usuario debe ingrear mediante prompt el primer numero,
el operador y el segundo numero y el algoritmo pintara por pantalla los dos numeros el operador y  
el resultado ejmp= "2 + 2 = 4".
*/

let op1 = parseFloat(prompt('Introduzca el operando 1'));
let operation = prompt('Introduzca la operacion: Ej; +, -, *, /');
let op2 = parseFloat(prompt('Introduzca el operando 2'));

switch (operation) {
    case '+':
        document.write(`<p>${op1} ${operation} ${op2} = ${op1+op2} </p>`);
        break;
    case '-':
        document.write(`<p>${op1} ${operation} ${op2} = ${op1-op2} </p>`);
        break;
    case '*':
        document.write(`<p>${op1} ${operation} ${op2} = ${op1*op2} </p>`);
        break;
    case '/':
        document.write(`<p>${op1} ${operation} ${op2} = ${op1/op2} </p>`);
        break;
    default:
        document.write('<p>Operacion no reconocida.</p>');
}