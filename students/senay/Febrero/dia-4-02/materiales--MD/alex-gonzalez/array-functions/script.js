const n = parseInt(prompt('Introduzca un número'));

const words = [];
for (let i = 0; i < n; i++) {
    const word = prompt('Introduzca una palabra');
    words.push(word);
}

// a partir de aqui ya tenemos un array de palabras de longitud n

/*
1. Ordenar el array de menor a mayor
(a,b) => {
    if(a.length < b.length) return -1;
    if(a.length > b.length) return 1;
    return 0;
}

*/
words.sort((a, b) => a.length - b.length); // a.length =4 y b.length = 4 ==> 0


// Imprimir con un P si hay alguna palabra con más de una letra 't' --> some
function hasMoreThanOneT(str) {
    let count = 0, i = 0, lStr = str.toLowerCase();
    while (!count < 2 && i < lStr.length) {
        count += lStr[i] === 't' ? 1 : 0;
        i++;
    }

    return count >= 2;
}
// version fuerza bruta
document.write(`<p>Hay alguna palabra con más de una t: ${words.some(w => hasMoreThanOneT(w))}`);
// version split
document.write(`<p>Hay alguna palabra con más de una t: ${words.some(w => w.toLowerCase().split('t').length >= 3)}`);
// version REGEX
document.write(`<p>Hay alguna palabra con más de una t: ${words.some(w => /.*t.*t/i.test(w))}`);

/*
Imprimir con un p si todas las palabras contienen al menos una 'a' --> every
*/
// version includes
words.every(w => w.toLowerCase().includes('a'));
// version REGEX
words.every(w => /.*a/i.test(w));

/*
Imprimir con un p la primera palabra que empiece por 'h' --> find 

o el mensaje "no hay palabras que empiecen por h"

*/
// version starts with
words.find(w => w.toLowerCase().startsWith('h'));
// versino REGEX
words.find(w => /^h/i.test(w));

/*
Generar un nuevo array con las palabras dadas la vuelta --> map
*/
function reverseStr(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str.charAt(i);
    }
    return result;
}


words.map(w => reverseStr(w));

/*
Imprimir con una p 
   cuántas palabras son infinitivos (terminan en ar er o ir) --> reduce
*/
// version ENDS with
const isInfinitive = w => w.endsWith('er') || w.endsWith('ar') || w.endsWith('ir');
words.reduce((acc, w) => acc + (isInfinitive(w.toLowerCase()) ? 1 : 0), 0);
// version REGEX
words.reduce((acc, w) => acc + (/(er|ir|ar)$/i.test(w) ? 1 : 0), 0);

