
let crear =document.createElement('H2');

crear.textContent = 'hola'
document.body.appendChild(crear)

crear.classList.add('titulo')

crearD =document.createElement('div');
document.body.appendChild(crearD)

crearD.appendChild(crear)



//En un documento html vacío, añadir un div el cual tendrá dentro un enlace a  Google, un párrafo y una  
//lista de marca de coches ('SEAT', FORD Y CITROEN), usar metodos del objeto Document (create element....).(easy)

const div =  document.createElement('div');
document.body.appendChild(div);

const enlace = document.createElement('a');
div.appendChild(enlace);
enlace.setAttribute("href", "somelink url");

const p = document.createElement('p');
div.appendChild(p);

const lista = document.createElement('ul');
div.appendChild(lista);
const element1 = document.createElement('li');
lista.appendChild(element1);
const element2 = document.createElement('li');
lista.appendChild(element2);

enlace.href= "https://www.google.com"
enlace.textContent="google"
p.textContent = "esto es el parrafo"
element1.textContent ="Seat"
element2.textContent ="Ford"

//Recuperar todos los li de la página y muéstralos por consola.
//Recuperar todos los elementos con class "item" y muéstralos por consola.


const elista = document.querySelectorAll("li");

console.log(elista);

const id =document.querySelectorAll("#listaid");


//Recuperar los elementos que tengan atributo  data-demo y muéstralo por consola (getAtribu....).


const ul =document.querySelector('ul');
const ul2= ul.getAttribute("dom-demo" );
console.log(ul2)

//Cambiar el texto de todos los elementos  que tengan la clase "special" a "texto de la clase Special cambiado
const text = document.querySelectorAll('.special');
for (let i=0; i<text.length; i++){
    text[i].textContent ="estoy cambiando el texto";
}
//Cambiar el tamaño de letra usando estilo en linea STYLE, de los elemento con atributo  data-demo.
const text2 = document.querySelector('[dom-demo]');
text2.style = "font-size: 10px";


//Crear un li que tenga un id="CREADO_CUSTOM" y añadirlo como último hijo del ul.


const elemento = document.createElement('li');
lista.appendChild(elemento);
elemento.id='CREADO_CUSTOM';

