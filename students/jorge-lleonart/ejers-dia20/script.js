
// // Ejercicio 1

// let n1 = prompt('Introduzca un numero');
// let n2 = prompt('Introduzca otro numero');

// if (n1>n2) {
//     document.write(n1);
    
// } else {
//     document.write(n2);
    
// }

// // ejercicio 2

// let s = prompt('Seleccione un idioma: Frances (f), Inglés (i), Español (e)');
// // let f = 'Salut'; no los hemos utilizado al final
// // let i = 'Hello'; no los hemos utilizado al final
// // let e = 'Hola'; no los hemos utilizado al final

// switch (s){
//     case 'f' : {document.write('<h1>Salut!</h1>'); break;}
//     case 'i' : {document.write('<h1>Hello!</h1>'); break;}
//     case 'e' : {document.write('<h1>¡Hola!</h1>'); break;}
//        default: { document.write('<h1>Language not valid</h1>')}
// };

// // ejercicio 3

// let edad = prompt('Indique su edad');

// let e = edad>18 ? 'Si' : 'No';

// // document.write(e + ' '+ 'puedes entrar a la discoteca');

// alert(e);

// // Ejercicio 4

// let año = prompt('insertar año');

// let e = (año%4)===0 && (año%100)!==0 ? 'Bisiesto' : 'No bisiesto';

// document.write(e);

// // Ejercicio 5 


// let luz= prompt('¿De qué color está el semaforo');

// if(luz === 'verde'){
//     document.write('<p style="color:green;">Adelante pase</p>')
// }else if(luz === 'ambar'){
//     document.write('<p style="color:yellow;">Pase solo si no es seguro parar</p>')
// }else{
//     document.write('<p style="color:red;">No pasar</p>')
// }

// // Ejercicio 6 

// let lengua= prompt ('Calificación en lengua');
// let mate= prompt ('Calificación en matemáticas');
// let ingl= prompt ('Calificación en inglés');
// let fis= prompt ('Calificación en física');
// let quim= prompt ('Calificación en química');
// let bio= prompt ('Calificación en biolgía');
// let his= prompt ('Calificación en historia');
// let a= 0;

// let suma = (parseFloat(lengua)+parseFloat(mate)+parseFloat(ingl)+parseFloat(fis)+parseFloat(quim)+parseFloat(bio)+parseFloat(his))/7;



// document.write('Su nota media'+ ' ' + suma);

// if (lengua>5){
//     a ++;
// }
// if (mate>5){
//     a ++;
// }
// if (ingl>5){
//     a ++;
// }
// if (fis>5){
//     a ++;
// }
// if (quim>5){
//     a ++;
// }
// if (bio>5){
//     a ++;
// }
// if (his>5){
//     a ++;
// }

// document.write('Aprobaos' + a);

// if (a>=6 && suma>6) {

//     document.write('USTED TIENE BECA')
    
// } else {
//     document.write('VAYASE A LA MIERDA')
    
// }



// // Ejercicio 7 y úuuultimo

// let dato1 = prompt('inserte dato');
// let op = prompt ('inserte operación');
// let dato2 = prompt('inserte dato');

// switch (op){
//     case '+' : {document.write(parseFloat(dato1)+parseFloat(dato2)); break;}
//     case '-' : {document.write(parseFloat(dato1)-parseFloat(dato2)); break;}
//     case '*' : {document.write(parseFloat(dato1)*parseFloat(dato2)); break;}
//     case '/' : {document.write(parseFloat(dato1)/parseFloat(dato2)); break;}
//     default: { document.write('operación no admitida');}
// }


