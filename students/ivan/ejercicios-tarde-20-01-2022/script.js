/*
1.Crea  un programa que dado dos números mediante prompt  
imprima el mayor de ellos por pantalla.
*/
const n_1 = prompt('Ingrese aquí un número');
const n_2 = prompt('Ingrese aquí otro número');
document.write(`El mayor de los dos números es ${Math.max(parseInt(n_1),parseInt(n_2))} `);

document.write('<br>');

/*
2. Crea un programa que devuelva un saludo en el idioma que le indiques,
 el idioma debe ser pasado por prompt y el saludo por default será en ingles.
*/
let idiom = prompt('Escriba el idioma en el que desea recibir la palabra "Hola". Las opciones disponibles son Ingles, Español y Frances');

switch(idiom){
case 'ingles' : {document.write('<p>Hello</p>'); break;}
case 'frances' : {document.write('<p>Salut</p>'); break;}
case 'español' : {document.write('<p>Hola</p>') ; break;}
default : {document.write('<p>Hello</p>'); break;}
}
document.write('<br>');

/*
3. Crea un algoritmo que te imprima por pantalla,  si tienes la edad suficiente para entrar a 
un local nocturno o no, el algoritmo debe usar operador ternario.
*/
const age = prompt('Ingrese aquí su edad');
parseInt(age)>=18 ? document.write('<p>Usted puede pasar</p>') : document.write('<p>Usted es menor de 18 años, mo puede pasar.</p>');

document.write('<br>');

/*
4. Crea un algoritmo para determinar si un año es bisiesto o no, para esto el año 
que se pase por prompt debera ser divisible entre 4 y no divisible entre 100, o ser 
divisible entre 400, del resto seria un año común, para este algormitmo usaremos 
operador ternario, pinta por pantalla el resultado.
*/
const year = prompt('Ingrese aquí un año');
if(parseInt(year)%4 === 0 && parseInt(year)%100 !== 0 ){

    document.write('<p>El año que ha ingresado es bisiesto</p>');
}else{
    document.write('<p>El año que ha ingresado no es bisiesto</p>');

}
document.write('<br>');

/*
5. La luz de trafico puede ser 'verde',  " ambar intermitente", "ambar"  
o "rojo". Crea un algoritmo que dado la luz de tráfico actual por prompt, 
pinte por pantalla  un semaforo  con la luz indicada y que indique si el coche
 puede pasar o debe parar.
*/
const ligth = prompt('Indique el color de la luz del semáforo');

switch(ligth){
    case 'rojo' : {document.write(`<div class="semaforo">
                                        <div class="semaforo-estado bg-rojo"></div>
                                        <div class="semaforo-estado"></div>
                                        <div class="semaforo-estado"></div>
                                        </div>`); break;}
    case 'ambar' : {document.write(`<div class="semaforo">
                                        <div class="semaforo-estado"></div>
                                        <div class="semaforo-estado bg-ambar"></div>
                                        <div class="semaforo-estado"></div>
                                        </div>`); break;}
    case 'verde' : {document.write(`<div class="semaforo">
                                        <div class="semaforo-estado"></div>
                                        <div class="semaforo-estado"></div>
                                        <div class="semaforo-estado bg-verde"></div>
                                        </div>`) ; break;}
    default : {document.write('<p>No ha ingresado un valor válido</p>'); break;}
    }
    document.write('<br>');

/*
6. Creemos un algoritmo para saber si un estudiante puede optar o no a 
una beca, para eso debera pasar  mediante prompt un total de 7 
calificaciones, y se debara imprimir por pantalla la cantidad de 
asignaturas aprobadas, la nota media y si puede optar o no a la beca,
 para saber si un estudiante puede optar a la beca deberá tener el 
 mínimo de asignaturas aprobadas y una nota media superior a 6, 
 PD:" la nota mínima para aprobar una asignatura  es de 5".
*/
const note_1 = prompt('Ingrese un número del 1 al 10.');
const note_2 = prompt('Ingrese un número del 1 al 10.');
const note_3 = prompt('Ingrese un número del 1 al 10.');
const note_4 = prompt('Ingrese un número del 1 al 10.');
const note_5 = prompt('Ingrese un número del 1 al 10.');
const note_6 = prompt('Ingrese un número del 1 al 10.');
const note_7 = prompt('Ingrese un número del 1 al 10.');
let contador = 0;


if(note_1>=5) contador++;
if(note_2>=5) contador++;
if(note_3>=5) contador++;
if(note_4>=5) contador++;
if(note_5>=5) contador++;
if(note_6>=5) contador++;
if(note_7>=5) contador++;


document.write(`El total de asignaturas aprobadas es ${contador}`);
document.write('<br>');

 const media = (parseInt(note_1)+parseInt(note_2)+parseInt(note_3)+parseInt(note_4)+parseInt(note_5)+parseInt(note_6)+parseInt(note_7))/7;

 document.write(`La nota media del alumno es ${media}`);
 document.write('<br>');

 if(contador>=5 && media>=6){
    document.write(`El alumno tiene derecho a beca`);

 }else{
    document.write(`El alumno no tiene derecho a beca`);

 }


document.write('<br>');

/*
Lo hago mediante arrays
*/
/*
const notes = [note_1, note_2, note_3, note_4, note_5, note_6, note_7];
const greatNotes = [];

notes.forEach(note => {
    if (parseInt(note) >= 5) {
        greatNotes.push(note);
    }
});



console.log(greatNotes);
*/

/*
7. Vamos a crear una calculadora que haga las operaciones basicas de 
suma, resta, multiplicación y división, en este caso usaremos el condicional 
SWITCH,  el usuario debe ingrear mediante prompt el primer numero, el operador 
y el segundo numero y el algoritmo pintara por pantalla los dos numeros el operador 
y  el resultado ejmp= "2 + 2 = 4".
*/
const x = prompt('Indique un numero.');
const y = prompt('Indique orto numero');
const operation = prompt('Indique la operacion que desea realizar');

let z = 0;

switch(operation){
    case 'suma' : {z = parseInt(x) + parseInt(y);
        document.write(`La ${operation} de ${x} y ${y} es ${z}`); break;}
    case 'resta' : {z = parseInt(x) - parseInt(y);
        document.write(`La ${operation} de ${x} y ${y} es ${z}`); break;}
    case 'division' : {z = parseInt(x) / parseInt(y);
        document.write(`La ${operation} de ${x} y ${y} es ${z}`); break;}
    case 'multiplicacion' : {z = parseInt(x) * parseInt(y);
        document.write(`La ${operation} de ${x} y ${y} es ${z}`); break;}
    default : {document.write('<p>Hello</p>'); break;}
    }
    document.write('<br>');






