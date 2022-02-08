// Utilizando JS realizar las siguientes operaciones:
// pintar  por la consola JS (console.log) el body.
// recuperar el primer p y pintarlo por consolaJS
// cambiar el texto del H1 a Titulo cambiado
// recuperar todos los elementos que tengan la clase text y cambiarles el color a #746FEE
// recuperar el boton y cambiarle el background color a #FF1111
// crear un elemento p y añadirlo como hijo del div
// (editado)


console.log(document.querySelector('body'))
console.log()

// Utilizando JS realizar las siguientes operaciones:
// pintar  por la consola JS (console.log) el body. ==> console.log(document.body)
// recuperar el primer p y pintarlo por consolaJS ==> console.log(document.querySelector('p'))
// cambiar el texto del H1 a Titulo cambiado  ==>  document.querySelector('h1').textContent='Titulo cambiado'
// recuperar todos los elementos que tengan la clase text y cambiarles el color a #746FEE ==>document.querySelectorAll('.text').forEach(e => e.style.color='#746FEE')
// recuperar el boton y cambiarle el background color a #FF1111 ==> document.getElementById('MY_BUTTON').style.backgroundColor = '#FF1111'
// crear un elemento p y añadirlo como hijo del div  ==>
//       const pHtml= document.createElement('p'); // creo el p
//       pHtml.textContent = 'Lo que quieras'; // le pongo un texto random
//       const divHtml = document.querySelector('.container'); // selecciono el elemento donde quiero meter el p
//       divHtml.appendChild(pHtml); //  añado al contenedor el p como hijo
// (editado)