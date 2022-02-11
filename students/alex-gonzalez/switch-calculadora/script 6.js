/*
1. Solicitar al usuario el operando 1 y procesar su tipo de datos
2. Solicitar al usuario la operacion guardándola en una variable
3. Solicitar al usuario el operando 2 y procesar su tipo de datos
4. En caso que la operacion sea:
    a. +, pintareos la suma
    b. -, pintaremos la resta
    c. *, pintaremos la mult
    d. /, pintaremos la división
    e. En otro caso indicaremos al usuario que la operación no se reconoce
*/

const op1 = parseFloat(prompt('Introduzca el operando 1')); // paso 1
const operation = prompt('Introduzca la operacion. EJ: +,-,*,/'); // paso 2
const op2 = parseFloat(prompt('Introduzca el operando 2')); // paso 3

if (!isNaN(op1) && !isNaN(op2)) { // si ninguno de los dos es NaN
    const baseMsgResult = `${op1} ${operation} ${op2} =`;
    switch (operation) {
        case '+': document.write(`<p>${baseMsgResult} ${op1 + op2}</p>`); break;
        case '-': document.write(`<p>${baseMsgResult} ${op1 - op2}</p>`); break;
        case '*': document.write(`<p>${baseMsgResult} ${op1 * op2}</p>`); break;
        case '/': document.write(`<p>${baseMsgResult} ${op1 / op2}</p>`); break;
        default: document.write('<h1>Operacion no reconocida</h1>');
    }
}else{
    document.write('<h1>Los operandos deben ser numéricos</h1>');
}


