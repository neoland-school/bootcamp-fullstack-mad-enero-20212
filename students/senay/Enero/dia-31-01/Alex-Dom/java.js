/**
 * 1. pintar  por la consola JS (console.log) el body. ==> console.log(document.body)
 */

// console.log(document.body);

// 2. recuperar el primer p y pintarlo por consolaJS ==> console.log(document.querySelector('p'))

// document.querySelectorAll('p')
// const nthParafo = document.querySelectorAll('p:first-of-type');
// nthParafo

// 3. cambiar el texto del H1 a Titulo cambiado  ==>  document.querySelector('h1').textContent='Titulo cambiado'
// document.querySelector('h1').textContent='Titulo cambiado'

/**
 * recuperar todos los elementos que tengan la clase text y 
 * cambiarles el color a #746FEE ==>
 */

// document.querySelectorAll('.text').forEach(e => e.style.color='#746FEE')

/**
 * recuperar el boton y cambiarle el background color a #FF1111 ==> 
 * 
 * document.getElementById('MY_BUTTON').style.backgroundColor = '#FF1111'
 */

/**
 * 6. crear un elemento p y añadirlo como hijo del div  ==>
 */


//-----------------------------------jose-------------------------
/**
 * 1 En un documento html vacio, crea un H2, luego ponle un texto y luego una clase que 
 * cambie de color, usando los métodos del objeto Document.
 */

// console.log(document.body);
// const encabezadoH2 = document.createElement('h2');
// encabezadoH2.textContent = 'Esto es un Encabezado h2';