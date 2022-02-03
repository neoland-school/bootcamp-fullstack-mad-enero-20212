// // ejericicio 1,: crear dos variables prompr y que se represente la mayor de ellod

// let a= prompt('escribir numero')
// let b= prompt('escribir otro numero')



// if (a > b) {
//     document.write(a)
    
// } else {
//     document.write(b)
    
// }

// //ejercicio2

// // let F='Salut!'
// // let E='¡Hola!' no se han usado estos let
// // Let I='Hello!'

// let s= prompt('selecciona idioma(mayúscula): F, E, I')

// switch (s) {
//     case 'F': {
//         document.write('Salut!') ;break;}
//     case ' E ':{
//         document.write('¡Hola!'); break;}
//     case ' I ' : {
//         document.write('Hello!'); break;
//     }
//     default: {
//         document.write('hazme caso de una vez y pon un idioma ');break;
//     }
// }

//Ejercicio 3




// let e= prompt('intoduce tu edad, chati')

// let años= e >= 18 ?  'Adelante, puedes pasar a nuestro garito' : 'Perdon, baby, vuleve en unos años'; 
// // document.write(años +' '+ 'pasar a nuestro garito')
// alert(años )


//ejercicio 4 


// let x= prompt('introduce un año')

// let año= (x%4) === 0 && (x%100)!==0 ? '¡Es un año bisiesto!' : 'vaya, es un año normal, no es bisiesto';
// alert(año)
 
//ejercicio 5





let luces= prompt ('¿De qué color esta el semaforo?');

if (luces === 'verde') {document.write('Adelante, puedes pasar')
    
} else if (luces === 'ambar') { document.write('esta en ambar, pasa si no es seguro parar')
    
}else  { document.write('quieto parao')

}

//ejercicio 6



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
// document.write(' has probao' + a);

// if (a>=6 && suma>6) {
//     document.write('Enhorabuena has aprobado..... redoble de tambor:')
// } else {
//     document.write('no optas a beca, lo sentimos')
// }



//ejercicio 7

let dato1= prompt('mete numero')
let operacion=prompt ('qué operacion quieres realizar?')
let dato2=prompt('segundo numero')




switch(operacion){
    case 'suma': {
        document.write(parseFloat(dato1)+parseFloat(dato2));break;
    }
    case 'resta' :{
        document.write(parseFloat(dato1)-parseFloat(dato2));break;
    
    }
    case 'multiplicacion':{
        document.write(parseFloat(dato1)*parseFloat(dato2));break;
    }
    case 'division':{
        document.write(parseFloat(dato1)/parseFloat(dato2));break;
    }

}





