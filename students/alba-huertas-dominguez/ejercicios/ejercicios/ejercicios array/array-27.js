//Crear una función que reciba por parámetros 2 array. Esta función devolverá los 2 arrays concatenados y los mostrará en el navegador.(easy)
const arr1 = ["hola", "que tal?"]
const arr2 = ["mundo", "gente"]

const arr3 = arr1.concat(arr2);

document.write(arr3)


//Crear una función que reciba un parámetro de entrada y que imprima por pantalla true si el parámetro 
//es un array y false si es otro tipo de dato, ver metodos de array!.(easy)

const arr = [1,2]
const Narr = 3

Array.isArray(arr);

document.write( Array.isArray(Narr))

//Crear una función que reciba un array de 10 números e imprima por pantalla true
// si todos son mayor de 10 o false en caso contrario (hay un metodo de array para esto empieza por E...).(easy)

const arr10 = [90,70,80,100,20,60,7,89,24,56];

const all10 = arr10.every((v,i,array) => v >10);

document.write( all10);

//Crea una función que reciba un array y una palabra e 
//imprima true o false si palabra existe o no dentro del array (ver metodo empieza por i).(easy)


const arr = ["hola", "adios", "bien"];

document.write(arr.includes("hola"));

//Crear una función para ordenar un array de números desordenados de mayor a menor.(easy)

const num = [80,57,44,145,1];


const orden = num.sort((a,b)=>{
    return b-a; // de esta forma ordeno la lista desde mayor a menor
 }); 


document.write(orden)

const num = [80,57,44,145,1];


const orden2 = num.sort((a,b)=>{
    return a-b; // de esta forma ordeno la lista desde menor a mayor
 }); 


document.write(orden2)


//Crear una función que reciba un array de números y devuelva un array con los que son mayores que 10.(easy)


const arr1= [ 50,78,5,7,9,154];

const arrsub = arr1.filter( v => v>10);

document.write(arrsub);

//Crear una función que reciba un array de strings e imprime por pantalla el 
//array con los strings capitalized,(pista: substring) ejmp: let =[jose,maca,jorge], output: [Jose,Maca,Jorge].(medium)

let nom = ["jose","maca","jorge"]

nom.forEach((v,i,array) =>{
    array[i]=array[i].charAt(0).toUpperCase()+array[i].substring(1,array[i].length);})

document.write(nom);


//Crear una función que dado un número y un array de números, te devuelva  por 
//pantalla la posición donde se encuentra el número o  -1 si no lo encuentra.(medium)

let num = [10,20,30,40];
let pos = 80;

const foundNum = num.findIndex((v,i,array) => v === pos);

document.write(foundNum);


