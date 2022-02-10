/**
 * 
 * Método GET:
 *Vamos a crear una app de Paises, para los ejercicios d nos traeremos de 
 *la siguiente url los datos de países usando la api  fetch,
 * 'https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json'
 * 
 *
 *      1- Mediante fetch obtén todos los datos que trae la url de los pauses y píntalo por consola. -->done
        2- Crea una función que pinte en tu Html todos los países que el nombre  en ingles sea mayor a 4 caracteres.
        3- Pinta en tu html los paises con el nombre en español, código país y prefijo.
        4- Añadir un botón al anterior que tenga el texto "EN", al pulsarlo cambiarán los nombres de los paises a su versión en inglés.
        5- Refactorizar el código anterior para lograr que al introducir "Arg" o "arg" aparezca un listado con la información de todos los paises que empiecen por 'arg'.
        6- Mostrar en un html los paises cuyo prefijo telefónico se encuentre en el rango 20<x<600. Además debemos mostrar cuantos paises son en total.
 * 
 * 
 */

/* PROBLEMA 1 */
async function getCountrys(){

    const response = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
    const countries = await response.json();
    return countries;
}

getCountrys().then(country => console.log(country)); //mestro por consola mi objeto

function printCountriesNameMoreThan4Char(obj){ //creo la función que pinta los paises con más de 4 caracteres en su nombre en ingles

        const arrCountries = obj.countries;

        const countriesMoreThan4Char = arrCountries.filter(country => country.name_en.length>4);
//let counter =0;
        countriesMoreThan4Char.forEach(country => {

            const pDOM = document.createElement('p');
            pDOM.textContent = country.name_en;
            document.body.appendChild(pDOM);
            // counter++;
            // console.log(counter)
        });           
};

async function startApiPrint4Char(){

   const objectCountries = await getCountrys();
    printCountriesNameMoreThan4Char(objectCountries);

}

//startApiPrint4Char();


/* PROBLEMA 2 */

function printCountriesNameMoreThan5Char(obj){ //creo la función que pinta los paises con más de 5 caracteres en su nombre en ingles

    const arrCountries = obj.countries;

    const countriesMoreThan4Char = arrCountries.filter(country => country.name_en.length>5);
//let counter =0;
    countriesMoreThan4Char.forEach(country => {

        const pDOM = document.createElement('p');
        pDOM.textContent = country.name_en;
        document.body.appendChild(pDOM);
        // counter++;
        // console.log(counter)
    });           
};

async function startApiPrint5Char(){

    const objectCountries = await getCountrys();
    printCountriesNameMoreThan5Char(objectCountries);
 
 };

// startApiPrint5Char();


 /* PROBLEMA 3 */

 
function printCountriesSpanishName(obj){ //creo la función que pinta los paises en español, con su codigo y prefijo
    const arrCountries = obj.countries;

//let counter =0;
        arrCountries.forEach(country => {

        const pNAmeDOM = document.createElement('p');
        pNAmeDOM.classList.add('country_name')
        pNAmeDOM.textContent = country.name_es;
        document.body.appendChild(pNAmeDOM);

        const pCodeDOM = document.createElement('p');
        pCodeDOM.textContent = country.code;
        document.body.appendChild(pCodeDOM);

        const pDialCodeDOM = document.createElement('p');
        pDialCodeDOM.textContent = country.dial_code;
        document.body.appendChild(pDialCodeDOM);
        //  counter++;
        //  console.log(counter)
    });           
};

async function startApiPrintCountriesSpanish(){

    const objectCountries = await getCountrys();
    printCountriesSpanishName(objectCountries);
 
 };

 //startApiPrintCountriesSpanish();

 /* PROBLEMA 4 */

 //creo una función que me pinte los nombre en ingles y que cambie el vlor del texto de los p con la clase 'country_element'
 //después creo un adeventlistener para cuando se hace click en el boton EN

 function printCountriesEnglishName(obj){ //creo la función que pinta los paises en español, con su codigo y prefijo
    const arrCountries = obj.countries;

//let counter =0;
        arrCountries.forEach((country,i) => {

        const arrpNAmeDOM = document.querySelectorAll('.country_name'); //esto es un array y en cada posición me devuelve un nodo del DOM
        // console.log(arrpNAmeDOM[i])
        // console.log(country.name_en)
        arrpNAmeDOM[i].textContent = country.name_en; //le cambio el valor a cada uno de los p por el nombre en ingles.
        
     
        //  counter++;
        //  console.log(counter)
    });           
};

//creo una función asincrona que me toma los datos y cambia el valor

async function changeNameToEnglish(){

    const objectCountries = await getCountrys();
    printCountriesEnglishName(objectCountries);

}


const buttonEnDOM = document.querySelector('#english');
console.log(buttonEnDOM);

startApiPrintCountriesSpanish();

buttonEnDOM.addEventListener('click',()=>changeNameToEnglish());


 /* PROBLEMA 5 */
/**
 * Refactorizar el código anterior para lograr que al introducir "Arg" o "arg" 
 * aparezca un listado con la información de todos los paises que empiecen por 'arg'.
 */
const inputDOM = document.querySelector('#filter');
let inputValueDOM = inputDOM.value;

function printByFilter(obj,input){

    const inputLowerCase = input.toLowerCase();
    const arrCountries = obj.countries;
    

    const arrFilter = arrCountries.filter((country) => country.name_es.toLowerCase().startsWith(inputLowerCase));
    arrFilter.forEach(filterCountry =>{

        const pNAmeDOM = document.createElement('p');
        pNAmeDOM.classList.add('country_name')
        pNAmeDOM.textContent = filterCountry.name_es;
        document.body.appendChild(pNAmeDOM);

        const pCodeDOM = document.createElement('p');
        pCodeDOM.textContent = filterCountry.code;
        document.body.appendChild(pCodeDOM);

        const pDialCodeDOM = document.createElement('p');
        pDialCodeDOM.textContent = filterCountry.dial_code;
        document.body.appendChild(pDialCodeDOM);

    });
};

function removeElements(){ //función que me elimina todos mis elementos
    const allPDOM = document.querySelectorAll('p');
    allPDOM.forEach(p => p.remove());
}

//creo una función asincrona para ejecutar el pintado de los elementos
async function startPrintByFilter(){
    const objectCountries = await getCountrys();
    printByFilter(objectCountries, inputValueDOM); 
}

//creo un adeventlistener para que escuche cuando doy al intro.
//dentro del evento tengo que actualizar el valor del input, tengo que eliminar el contenido y pintar el nuevo
inputDOM.addEventListener('keyup',()=>{

    inputValueDOM = inputDOM.value;
    console.log(inputValueDOM);
    startPrintByFilter();
    removeElements()

}); 


/* PROBLEMA 6 */
/**
 * Mostrar en un html los paises cuyo prefijo telefónico se encuentre en el rango 20<x<600. 
 * Además debemos mostrar cuantos paises son en total.
 */

//creo una función que busque los paises cuyo prefijo telefónico se encuentre entre 20<x<600

function findPrefCountries (obj){
    
    const arrObj = obj.countries; //obtengo el array. 

    const arrPref = arrObj.filter(country => parseInt(country.dial_code)>20 && parseInt(country.dial_code)<600);
    
    arrPref.forEach(country =>{

        const pNAmeDOM = document.createElement('p');
        pNAmeDOM.classList.add('country_name')
        pNAmeDOM.textContent = country.name_es;
        document.body.appendChild(pNAmeDOM);

        const pCodeDOM = document.createElement('p');
        pCodeDOM.textContent = country.dial_code;
        document.body.appendChild(pCodeDOM);
    })
};


async function printPrefCountries(){

    const objectCountries = await getCountrys();
    findPrefCountries(objectCountries);

};

printPrefCountries();