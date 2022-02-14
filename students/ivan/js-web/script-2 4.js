/*
EJERCICIOS JOSE


*/

/*
1. En un documento html vacio, crea un H2,
 luego ponle un texto y luego una clase que 
 cambie de color, usando los métodos del objeto Document.
*/

const tittle2 = document.createElement('h2');

tittle2.textContent='Esto es un título de nivel 2';

document.body.appendChild(tittle2);

tittle2.classList.add('color-red');

tittle2.style.color = 'red';


/*
2. El h2 creado previamente mételo dentro de un div usando
 los métodos del objeto Document.
*/

const div1 = document.createElement('div');

document.body.appendChild(div1);

div1.appendChild(tittle2);

/*
3. En un documento html vacío, añadir un div el cual 
tendrá dentro un enlace a  Google, un párrafo y una  
lista de marca de coches ('SEAT', FORD Y CITROEN), 
usar metodos del objeto Document (create element....).(easy)
*/

div1.remove();

const div2 = document.createElement('div');

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Esto es un párrafo'

const enlace1 = document.createElement('a');
enlace1.href ='https://www.google.com/';
enlace1.target = '_blank';
enlace1.textContent ='Esto es un enlace a google';


const list1 = document.createElement('ul');

let item1List = document.createElement('li');
item1List.textContent='SEAT';

let item2List = document.createElement('li')
item2List.textContent='FORD';

let item3List = document.createElement('li');
item3List.textContent='CITROEN';

list1.appendChild(item1List);
list1.appendChild(item2List);
list1.appendChild(item3List);

div2.appendChild(parrafo1);
div2.appendChild(enlace1);
div2.appendChild(list1);

document.body.appendChild(div2);

/*
4. En un documento html crea un UL con un Atributo llamado
 "dom-demo" , dentro del UL deben ir 4 LI,  tendrán una 
 class llamada "item", dos de ellos tendrán además  otra 
 class llamada "special", un LI tendrá el atributo dom-demo 
  y por ultimo el cuarto elemento debe tener un id llamado
   "cuarto_elemento". El ejercicio será el siguiente:(medium)
*/
div2.remove();
const list2 = document.createElement('ul');

list2.classList.add('dom-demo');
list2.setAttribute('dom-demo','custom-atrb')

//creo los 4 li
item1List = document.createElement('li');
item1List.textContent='Primer li';

item2List = document.createElement('li')
item2List.textContent='Segundo li';

item3List = document.createElement('li');
item3List.textContent='Tercer li';

let item4List = document.createElement('li');
item4List.textContent='Cuarto li';


//meto los li dentro del ul
list2.appendChild(item1List);
list2.appendChild(item2List);
list2.appendChild(item3List);
list2.appendChild(item4List);

//meto el ul dentro del body
document.body.appendChild(list2);

//ahora creo una clase item y se la asigno a los elementos li

const liElements = list2.querySelectorAll('li');
//esto me da un array, no puedo usar los metodos del DOM sobre el, usaré
//un forEach para recorrerlo y asignarle la clase 'item'. 
//el método classList.add() se usa para asignar una clase a un elemento concreto
//para asignarsela a varios tengo que usar los métodos de arrays

//puedo aplicar directamente el método classList.add() porque tengo seleccionado
//un solo elemento del DOM
//list2.classList.add('item')

liElements.forEach(l => l.classList.add('item'))

//selecciono dos elementos li anteriore y le aplico la clase 'special'

//item3List.classList.add('special')
//truco el forEach para que no haga nada en las posiciones impares
liElements.forEach((l,i) => i%2===0 ? l.classList.add('special'): console.log(l))


//item1List.classList.add('special')
//item3List.classList.add('special')


item1List.setAttribute('dom-demo' ,'custom-atrb');


item4List.setAttribute('id', 'cuarto_elemento');

// 1.1 Recuperar todos los li de la página y muéstralos por consola.
const allLi = list2.querySelectorAll('ul > li');
console.log(allLi);

// Otra forma => console.log(document.body.querySelectorAll('.item'))


//1.2 Recuperar todos los elementos con class "item" y muéstralos por consola.
console.log(document.querySelectorAll('.item'));

//1.3 Recuperar el elemento con id="cuarto_elemento" y muéstralo por consola.
console.log(document.querySelectorAll('#cuarto_elemento'));

//1.4 Recuperar los elementos que tengan atributo  dom-demo y muéstralo por consola (getAtribu....).
//console.log(document.getAttibute('data-demo'))

const allElements = document.body.querySelector('ul')
//aqui tengo una lista de nodos con todos mis elementos
console.log(allElements.getAttribute('dom-demo'))

const itemDomDemo = document.querySelectorAll('[dom-demo]')
//hago un forEach para recorrerlos

console.log(itemDomDemo)
//allElements.forEach(e => e.getAttribute('class')===true ?  )

//1.5 Cambiar el texto de todos los elementos  que tengan la clase "special" 
//a "texto de la clase Special cambiado".

const elementSpecial = document.querySelectorAll('.special');

//console.log(elementSpecial);
elementSpecial.forEach(l => l.textContent='texto de la clase Special cambiado');

//1.6 Cambiar el tamaño de letra usando estilo en linea STYLE, 
//de los elemento con atributo  dom-demo.


itemDomDemo.forEach(e => e.style= 'font-size: 30px;')
//por herencia se cambia en todos los hijos


//1.7 Crear un li que tenga un id="CREADO_CUSTOM" y añadirlo como último hijo del ul.

const liCustom = document.createElement('li');

liCustom.setAttribute('id','CREADO_CUSTOM');
liCustom.textContent='Este el el texto de mi ultimo hijo del elemento <ul>'

list2.appendChild(liCustom);
