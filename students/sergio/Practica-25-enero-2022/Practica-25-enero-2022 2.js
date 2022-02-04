/*
// EJERCICIO 1 //
document.write('Ejercicio 1 - <br>')

function contaMad(a) {
    if( a < 40 ) {
        return document.write('Contaminacion < 40%: Puede ir a la velocidad que quiera.')
    } else if( a >= 40 && a < 75) {
        return document.write('Contaminacion entre 40% y 70%: Puede ir como maximo a 90Km/h.')
    } else {
        return document.write('Contaminacion > 70%: Debe ir a menos de 70Km/h.')
    }
}

let dia = parseInt(prompt('Indique la contaminacion de Madrid a día de hoy:'));
contaMad(dia);


document.write('<br>')ç

//EJERCICIO 2//
document.write('Ejercicio 2 - <br>');

function contaMad(a) {
    if( a < 40 ) {
        return document.write('<div class="red"></div>')
    } else if( a >= 40 && a < 75) {
        return document.write('<div class="orange"></div>')
    } else {
        return document.write('<div class="green"></div>')
    }
}

let dia = parseInt(prompt('Indique la contaminacion de Madrid a día de hoy:'));
contaMad(dia);

document.write('<br>')ç

//EJERCICIO 3//
document.write('Ejercicio 3 - <br>');

function midWord(a) {
    let midLong = Math.ceil((a.length)/2)-1;
    let letter = a.charAt(midLong)
    return letter ;
}

let palabra = prompt('Escriba aqui una palabra')

document.write(midWord(palabra));

document.write('<br>')

//EJERCICIO 4//
document.write('Ejercicio 4- <br>');
*/
function reves(x) {
    let a = '';
    for (let i = x.length; i >= 0; i--) {
        a += x.charAt(i)
    };
    return a;}

/*
let palabras = prompt('Indique aqui la palabra que desea del revés: ');
document.write(reves(palabras));

document.write('<br>')

//EJERCICIO 5//
document.write('Ejercicio 5- <br>');



//RAYADA MENTAL QUE ME HE PEGADO. PENSANDO QUE LA MITAD DE LA PALABRA TIENE QUE SER COMO LA SEGUNDA.
function palindromo(x) {
    if(x.length % 2 === 0) {
        let midLong = Math.ceil((x.length)/2);
        let totLong = x.length;
        let p1 = x.substring(0,midLong);
        let p2 = x.substring(midLong,totLong);
        if (p1 === p2.reverse) {
            return document.write('Es palindromo')
        } else { 
            return document.write('No es palindromo')
        }
    } else {
        let midLong = Math.ceil((x.length)/2);
        let totLong = x.length;
        let p1 = x.substring(0,(midLong-1));
        let p2 = x.substring(midLong,totLong);
    
        if (p1 === p2.reverse) {
            return document.write('Es palindromo')
        } else { 
            return document.write('No es palindromo')
        }
    }
}

debugger;
let palabrareves = prompt('Indique la palabra que quiere saber si es palindromo?')
palindromo(palabrareves);




debugger;
let palapalin = prompt('¿Que palabra quiere comprobar si es palindromo?');


if (palapalin === reves(palapalin)) {
    document.write('Son palindromos')
} else {
    document.write('No son palidromos')
}

document.write('<br>')
*/
//EJERCICIO 6//
document.write('Ejercicio 5- <br>');

function ecuacion(a,b,c) {
    let x = ((-(b) + Math.sqrt((Math.pow(b,2))-(4*(a)*(c)))/(2*a))) //dependeiendo de los numeros, funciona o no... creo que es por la raiz cuadrada
    let y = ((-(b) - Math.sqrt((Math.pow(b,2))-(4*(a)*(c)))/(2*a)))
    return document.write(`Los resultados son: ${x} e ${y} `)
}

let aa = parseInt(prompt('Escriba aqui el numero a'))
let bb = parseInt(prompt('Escriba aqui el numero b'))
let cc = parseInt(prompt('Escriba aqui el numero c'))
debugger;
ecuacion(aa,bb,cc)

/*
document.write('<br>')

//EJERCICIO 7//
document.write('Ejercicio 7 - <br>');

function enteros(a) {
    let c = '';
    for( let i = -a; i <= a; i++) {
        if(i % 2 === 0) {
            c+= ` Par ${i} <br>`
        } else {
            c+= ` Impar ${i} <br>`
        }
    }
    return c;
};

debugger;
let enter = parseInt(prompt('Indique un número para devolver sus enteros:'));
document.write(enteros(enter));

document.write('<br>')

//EJERCICIO 8//
document.write('Ejercicio 8 - <br>');

debugger;
let numeroreves = (prompt('Indique un número para devolverlo del reves:'))
let nummerostring = `${numeroreves}`;

document.write(parseInt(reves(nummerostring)));


document.write('<br>')

//EJERCICIO 9//
document.write('Ejercicio 9 - <br>');

    

let numcapicua = prompt('Indique un numero para ser devuelto del reves:');
let nummerostring1 = `${numcapicua}`;

if (numcapicua === reves(nummerostring1)) {
        document.write('Son capicuas')
    } else {
        document.write('No son capicuas')
    }

document.write('<br>')

//EJERCICIO 10//
document.write('Ejercicio 10 - <br>');

function primos(n) {
    let contador = 0;
    let a = '';
    debugger;
    for(let i = n; i >= 0; i--) {
        contador = 0;
        for(let j = n; j >= 0; j-- ) {
            
            if( i % j === 0){
                contador++
            } else {
                contador = contador;
            }
        }
        if( contador > 2) {
            a = a;
        } else { a += i + ' ';
    }}
    return document.write(reves(a));
}

let papa = parseInt(prompt('Indique el numero del que quiere los numeros primos:'))
primos(papa);

document.write('<br>')

//EJERCICIO 11//
document.write('Ejercicio 10 - <br>');

function fibonacci(a) {
    let list = '';
    let previusnum = 0;
    let correcnum = 1;
    let nextnum = 0;
    for(let i = 1; i < a; i++) {
        nextnum = previusnum + correcnum;
        previusnum = correcnum;
        list += `${correcnum}`;
        correcnum = nextnum;
    }
    return list
}


let numfib = parseInt(prompt('Lista fibonachi:'));
fibonacci(numfib);

document.write('<br>')
*/
//EJERCICIO 12//
document.write('Ejercicio 12 - <br>');
