/*
5. Crea un documento HTML con un body vacío,  ahora crea un objeto de tipo 
city que contenga {imagen, nombre de la ciudad, descripción}, repite el 
proceso con varias ciudades de tu elección y con ello crea un array de 
ciudades, ahora vamos a darle vida en nuestro html:(hard)
*/

//creo mis objetos de ciudades

const sevilla ={
    nombre: 'Sevilla',
    imagen: 'https://www.civitatis.com/blog/wp-content/uploads/2021/08/plaza-espana-sevilla.jpg',
    descripcion: 'Sevilla es una ciudad con encanto que se mueve al ritmo del flamenco, y es que, como dice la canción, Sevilla tiene un color especial. La ciudad se encuentra localizada en el sur de la Península Ibérica, es la capital de Andalucía y una de las ciudades más pobladas de España por detrás de Madrid, Barcelona y Valencia.',

}

const valencia ={
    nombre: 'Valencia',
    imagen: 'https://media.istockphoto.com/photos/aerial-view-of-the-old-town-of-valencia-spain-picture-id513895716?s=612x612',
    descripcion: 'La ciudad luminosa" Valencia, la tierra de flores y fallas , es una de las ciudades más grandes e importantes de España, y una de las más vivas. Al estar situada a la orilla del mar Mediterráneo, uno se encuentra las playas en el mismo corazón de la ciudad.',

}


const granada ={
    nombre: 'Granada',
    imagen: 'https://cdn1.matadornetwork.com/blogs/1/2019/02/Alhambra-of-Granada-Spain-1200x853.jpg',
    descripcion: 'Granada es música y poesía, puro arte monumental, cultura milenaria. Es provincia que alcanza el cielo desde las escarpadas cumbres de Sierra Nevada; ciudades de impresionante arquitectura que se encalman en el Altiplano; pueblos blancos desparramados por valles y laderas que mueren en los acantilados y playas de la Costa Tropical. La provincia de Granada, privilegiado destino turístico, permite al viajero practicar esquí en Sierra Nevada, aventurarse por los recónditos pueblos alpujarreños, recorrer la última frontera de Al-Andalus en el Poniente Granadino o alojarse en cuevas que rememoran la vida troglodita.',

}

const huelva ={
    nombre: 'Huelva',
    imagen: 'https://travelvibe.net/wp-content/uploads/2021/09/Best-Places-To-See-and-Things-To-Do-In-Huelva-768x415.jpg?ezimgfmt=ng:webp/ngcb11',
    descripcion: 'Mar y montaña, Costa de la Luz y sierras, gastronomía, ciudades, pueblos pintorescos y paraísos naturales… La provincia de Huelva es un pequeño compendio de atractivos turísticos. En apenas una hora de distancia podemos disfrutar del mejor turismo rural y de playa a partes iguales.Campiñas, marismas, arenales, playas magníficas en el Golfo de Cádiz, todo un Parque Nacional como el de Doñana y paisajes de otro planeta, como el de Río Tinto.',

}


const cities = [sevilla,valencia,granada,huelva];



//Creo una función que pinta un div con un p hijo
function htmlWriteDivP (divClass,textP){
const div = document.createElement('div');
    div.classList.add(`${divClass}`);
    const p = document.createElement('p');
    p.textContent= `${textP}`;
    div.appendChild(p);
 return   div;

}

function createCardCity (obj){


//creo el contenedor de cada card, le asigno su clase y lo meto dentro
//del contenedor principal
    const sectionContainerCity = document.createElement('section');
    sectionContainerCity.classList.add('container-city');
//Creo el primer div de mi card mediante la función htmlWriteDivP(que crea
//un div la clase que se le da por parametro + un p con el texto pasado por parametro)

    const divImage = htmlWriteDivP('image','NEW');
//meto el div+p en el contenedor de la ciudad
    sectionContainerCity.appendChild(divImage);

//mediante un estilo en línea asigno el background image al div
    divImage.style = `background-image: url('${obj.imagen}');`
// creo el div que contiene el simbolo de compartir
    const divSymbol = document.createElement('div');
    divSymbol.classList.add('share__symbol');
//creo el elemento i con su clase
    const symbol = document.createElement('i');
    symbol.classList.add('fa');
    symbol.classList.add('fa-share-alt');

//añado el elemento i dentro de su div
    divSymbol.appendChild(symbol);
    divImage.appendChild(divSymbol);
//añado el elemento div con su i dentro de la clase imagen
    divImage.appendChild(divSymbol);

//YA TENGO MI PRIMER DIV DENTRO DEL DIV DE LA CUIDAD

//creo mi segundo div con la clase city__name que será hermano del anterior
//el primer div+p lo creo con mi función
    const divName = htmlWriteDivP('city__name','31-01-2022');
//creo el h2, le añado el contenido y la clase
    const h2Name = document.createElement('h2');
    h2Name.classList.add('city__name-name')
    h2Name.textContent = obj.nombre;
//meto el h2 en el div anterior
    divName.appendChild(h2Name);
//meto el div en el main__container
    sectionContainerCity.appendChild(divName);

//YA TENGO MI SEGUNDO DIV DENTRO DEL DIV DE LA CIUDAD

//creo mi tercer div con la clase city__description que será hermano de los
//anteriores. Lo hago con mi función
    const divDescription = htmlWriteDivP('city__description',obj.descripcion);
    sectionContainerCity.appendChild(divDescription);


//YA TENGO MI TERCER DIV DENTRO DEL DIV DE LA CIUDAD

//creo mi ultimo div, el boton
    const button = document.createElement('div');
    button.classList.add('button');
//creo el elemento a
    const a = document.createElement('a');
    a.textContent = 'Read More';
    a.setAttribute('href','')
//meto el a dentro del div y el div dentro del contenedor
//de la ciudad
    button.appendChild(a);
    sectionContainerCity.appendChild(button);


//Ahora meto todo lo anterior en mi body. Para hacer referencia al appendChild el script
//debe estar dentro del body

 return  sectionContainerCity;
}

const mainContainer = document.createElement('div');

function addCity(obj){
//creo el contenedor principal lo meteré todo dentro de este
//y al final este lo meteré en el body 
    mainContainer.classList.add('main__container');
    mainContainer.appendChild(createCardCity(obj));
    return document.body.appendChild(mainContainer);
}




//addCity(cities[0]);
//addCity(cities[1]);
//addCity(cities[2]);
//addCity(cities[3]);

/*
Si la ciudad existe en nuestro array de objetos nuestra función 
nos pintara la CARD y si no existe nos arrojara un alert diciendo 
que la ciudad no existe.
*/


const  searchCity = (str) => {

const results = cities.filter(v => v.nombre.toLocaleLowerCase()===str.toLocaleLowerCase());

if(results.length>0){
    for(let i=0;i<results.length;i++)
    addCity(results[i]);
}else{
    alert('No se ha encontrado la ciudad')
}

};

const searchButton = document.querySelector('#search_button');
const valueInput = document.querySelector('#city');

searchButton.addEventListener('click',() => searchCity(valueInput.value));


/*
Ahora haremos un boton de limpiar al lado de nuestro  boton de buscar, 
este boton escuchara el evento click y deberá eliminar todas las cards que 
hayan en nuestro DOM, dejando nuestra pagina en blanco.
*/

function deleteAllCities(){

    const allCards = document.querySelectorAll('.container-city');

    allCards.forEach(d => d.remove());

}

const deleteButton = document.querySelector('#delete_button');

deleteButton.addEventListener('click', () => deleteAllCities());