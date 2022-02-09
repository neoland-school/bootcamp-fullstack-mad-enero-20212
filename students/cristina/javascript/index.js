

document.write("<h2>hola mundo</h2>")



//----------------------------------------//

let primero = 4;
let segundo = 2;
let resultSuma = primero + segundo;
let resultResta = primero - segundo;
let resultMultiplica = primero * segundo;
let resultDivide = primero / segundo;



document.write(`${primero} + ${segundo} = ${resultSuma} <br>`)
document.write(`${primero} - ${segundo} = ${resultResta} <br>`)
document.write(`${primero} * ${segundo} = ${resultMultiplica} <br>`)
document.write(`${primero} / ${segundo} = ${resultDivide} <br>`)


let nombre = 'Cristina';
let apellido = 'Romero';
let nombreCompleto = nombre + " " + apellido;




document.write(`${nombre} ${apellido}<br>`)
document.write(`${nombreCompleto}<br>`)
document.write(`${nombre.length}<br>`)




let gradosc= prompt("grados celsius");
let gradosf= (gradosc * 1.8) + 32;


document.write('<br>')


if(gradosc>87){
    document.write(gradosf);}



let c = 55;
let d = "55";


document.write(c==d);
document.write(`<br>`);
document.write(c===d);













