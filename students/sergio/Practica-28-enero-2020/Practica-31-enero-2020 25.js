
// PUNTO 1 //
console.log(document.body);

// PUNTO 2 //

const primP = document.querySelector(`.text`);
console.log(primP);

// PUNTO 3 //
const textcambiar = document.querySelector(`h1`);
textcambiar.textContent = "Titulo cambiado" ;
console.log(textcambiar);

// PUNTO 4 //

const colorcambiar = document.querySelectorAll(`.text`);
// en este caso, tenemos que hacer un forEach para que haga bucle y los cambie uno por uno //
// SIN FOREACH NO HARIA LO MISMO //
let cambio = colorcambiar.forEach(o => o.style.color = `#746FEE`);
console.log(colorcambiar);

// PUNTO 5 //

const cambiobottom = document.getElementById('MY_BUTTON');
let bottomchange = cambiobottom.style.backgroundColor = `#FF1111`;
// En este caso, no es necesario forEach porque solo hay un bottom, y no hay que crear bucle para que pase por todos.
console.log(bottomchange);