// 1.En un documento html vacio, crea un H2, luego ponle un texto y luego una clase que cambie de color, usando los métodos del objeto Document.

// let title = document.createElement('h2');
// title.textContent ='Adios mundo';
// document.body.appendChild(title);
// title.style.color='green';


// 2.El h2 creado previamente mételo dentro de un div usando los métodos del objeto Document.(easy)

// let div1 = document.createElement('div');

// document.body.appendChild(div1);
// div1.appendChild(title);

// 3. En un documento html vacío, añadir un div el cual tendrá dentro un enlace a  Google, un párrafo y una  lista de marca de coches ('SEAT', FORD Y CITROEN), usar metodos del objeto Document (create element....).(easy)

// let div1 = document.createElement('div');

// let linkWeb = document.createElement('a')
// linkWeb.textContent='Google'
// linkWeb.href="https://www.google.com/"
// linkWeb.target="_blank"

// let paragraph = document.createElement('p');
// paragraph.textContent = 'Lorem ipsum';
// let listCars = document.createElement('ul');
// let li1 = document.createElement('li');
// li1.textContent='SEAT';
// let li2 = document.createElement('li');
// li2.textContent='FORD';
// let li3 = document.createElement('li');
// li3.textContent='BMW';

// document.body.appendChild(div1);
// div1.appendChild(linkWeb);
// div1.appendChild(paragraph);
// div1.appendChild(listCars);
// listCars.appendChild(li1);
// listCars.appendChild(li2);
// listCars.appendChild(li3);

// 4. En un documento html crea un UL con un Atributo llamado "dom-demo" , dentro del UL deben ir 4 LI,  tendrán una class llamada "item", dos de ellos tendrán además  otra class llamada "special", un LI tendrá el atributo dom-demo  y por ultimo el cuarto elemento debe tener un id llamado "cuarto_elemento". El ejercicio será el siguiente:(medium)
// - Recuperar todos los li de la página y muéstralos por consola.
// - Recuperar todos los elementos con class "item" y muéstralos por consola.
// - Recuperar el elemento con id="cuarto_elemento" y muéstralo por consola.
// - Recuperar los elementos que tengan atributo  dom-demo y muéstralo por consola (getAtribu....).
// - Cambiar el texto de todos los elementos  que tengan la clase "special" a "texto de la clase Special cambiado".
// - Cambiar el tamaño de letra usando estilo en linea STYLE, de los elemento con atributo  dom-demo.
// - Crear un li que tenga un id="CREADO_CUSTOM" y añadirlo como último hijo del ul.

// Apartado 1

// let demoListTag = document.querySelectorAll('li');
// console.log(demoListTag);

//Apartado 2

// let demoList = document.querySelectorAll('.item');
// console.log(demoList);

//Apartado 3 

// let demoListId = document.getElementById('cuarto_elemento');
// console.log(demoListId);

// Apartado 4 

// let element = document.querySelector('body *')
// let demoAtr = element.forEach(element => element.getAttribute("class"));

// console.log(demoAtr);

// console.log(element.getAttribute("dom-demo"));

// Apartado 5 

// let classSpecial = document.body.querySelectorAll('.special');

// classSpecial.forEach(classSpecial => {classSpecial.textContent='Texto de la clase cambiado'
// });


// Apartado 6 

// let domDemo = document.body.querySelectorAll('[dom-demo]');
// domDemo.forEach(v=> v.style = "font-size: 100px" )

// Apartado 7 

// const ulList = document.querySelector('ul');
// typeof(ulList)
// let newListElement = document.createElement('li');
// newListElement.textContent='L5';
// newListElement.id = 'CREADO_CUSTOM';
// ulList.appendChild(newListElement);

// 5. Crea un documento HTML con un body vacío,  ahora crea un objeto de tipo city que contenga {imagen, nombre de la ciudad, descripción}, repite el proceso con varias ciudades de tu elección y con ello crea un array de ciudades, ahora vamos a darle vida en nuestro html:(hard)
// Crea una función llamada addCity que reciba  una ciudad como parámetro y lo añada al DOM.
// Crea una función llamada removeCity que reciba una ciudad como parámetro y borre del DOM la ciudad correspondiente.
// Crea una función llamada removeAllCity la cual eliminará todas las ciudades de la web.
// Crea una función llamada changeButtonColor, la cual cambia el background color de todos los botones de las cards al #64DD17.

let city1 = {
    nombre: 'Madrid',
    descripcion: 'bonita',
    imagen: 'https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/espana_madrid_granvia_shutterstockrf_179784317_ventdusud_shutterstock.jpg?itok=ZFL5M-1x'
}

let city2 = {
    nombre: 'Valencia',
    descripcion: 'Muybonita',
    imagen: 'https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/espana_madrid_granvia_shutterstockrf_179784317_ventdusud_shutterstock.jpg?itok=ZFL5M-1x'
}

let city2 = {
    nombre: 'Sevila',
    descripcion: 'Muybonita',
    imagen: ''
}

function addCity(a){
    let newListElement = document.createElement('p');
    newListElement.textContent=`${a}`;
    body.appendChild
}

