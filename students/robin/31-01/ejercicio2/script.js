
// EJERCICIO 3


const div = document.createElement('div');
const p = document.createElement('p')

p.textContent = "Esto es un parrafo"


document.body.appendChild(div)
div.appendChild(p)


let google = document.createElement('a');
google.setAttribute("href", "http://www.google.es")
let textGoogle= document.createTextNode("google");
google.appendChild(textGoogle)

div.appendChild(google)


let list = document.createElement('ol');

let li1 = document.createElement('li');

let li1Text = document.createTextNode('SEAT');
li1.appendChild(li1Text);

let li2 = document.createElement('li');

let li2text = document.createTextNode("FORD");
li2.appendChild(li2text);

let li3 = document.createElement('li');

let li3text = document.createTextNode("RENAULT");
li3.appendChild(li3text);



list.appendChild(li1);
list.appendChild(li2);
list.appendChild(li3);


div.appendChild(list);


