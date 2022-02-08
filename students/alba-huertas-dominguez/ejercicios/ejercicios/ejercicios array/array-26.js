//Crea un array de números por prompt e imprimelo por pantalla.(easy)
const num= [];

for(let i=0; i<3; i++){
    const user = parseFloat(prompt('Dime un numero'));
    num[i] = user


}

document.write(num);

// Crea un array  de música rock que contenga subgeneros [punk, metal, hardcore], 
//luego un array de los géneros musicales [rock, pop, country] en el array de los géneros musicales 
//'rock' será el array de subgéneros de música rock, luego crea un array de banda que contenga un string 
//"metallica" y el array de géneros y con ese array de banda muestra por pantalla el nombre de la banda "metallica" y el subgénero "metal".(easy)

let subg = ["punk","metal", "hardcore"];
let gen = [subg,"pop","country"];
let banda = ["metallica", gen];

document.write(banda[0]," ",subg[1])


// Crear una función que reciba por parámetros 2 array. Esta función devolverá los 2 arrays concatenados y los mostrará en el navegador.(easy)

let arr1=["hola","adios"]
let arr2=["frio","calor"]

function array(arr1,arr2){

    return arr1+arr2;
}


document.write(array(arr1,arr2));

//Crear una función que reciba un parámetro de entrada y que imprima por pantalla true si el parámetro es un array y false si es otro tipo de dato.(easy)

let a = "hola"
let b = []


function arr(a){
    return typeof(a) === typeof(b);

}

document.write(arr(a));


///Crear una función que reciba un array de 10 números e imprima por pantalla true si todos son mayor de 10 o false en caso contrario.(easy)

let ar = [1,2,3,4,5,6,7,8,9,10]

function num (ar){
    let cont=0
    for(let i=0; i<10; i++){
        if(ar[i] >10){cont++}
    };
    return cont

}
;
if (num(ar)<1){document.write(true);
} else{document.write(false)};

///Crear una función que reciba un array de 10 números e imprima por pantalla true si todos son mayor de 10 o false en caso contrario.(easy)

let ar = [100,20,30,40,50,6,70,80,90,100]

function num (ar){
    let cont=0
    for(let i=0; i<10; i++){
        if(ar[i] >10){cont++}
    };
    return cont >=10}
;
document.write(num(ar));


//Crea una función que reciba un array y una palabra y devuelva true o false si palabra existe o no dentro del array.(easy)


let a = ["hola", "adios"]
let b = "hola"

function p (a,b){
    let cont = 0
    for(let i=0;i<a.length; i++){
       if (a[i] === b) { cont++
           } 
    }; return cont > 0

}

document.write(p(a,b))

//Crear una función que reciba un array de números y devuelva un array con los que son mayores que 10.(easy)

let list = [150,70,58,2]

function arr (list){
    let num=[];
    for(let i=0; i<list.length; i++){
        if(list[i]>10){ num +=list[i]
        }
    };
         return num};

         document.write(arr(list))


         //Crear una función que reciba un array de números y devuelva un array con los que son mayores que 10.(easy)

let list = [15,0,8,2]

function arr (list){
    let num=[];
    for(let i=0; i<list.length; i++){
        if(list[i]>10){ num[i]=list[i]
        }
    };
         return num};

         document.write(arr(list))


//Crear una función que reciba un array de strings e imprime por pantalla el 
//array con los strings capitalized,(pista: substring) ejmp: let =[jose,maca,jorge], output: [Jose,Maca,Jorge].(medium)

let nom = ["jose","maca","jorge"]

function mayus(a){
   
    for(i=0; i<nom.length;i++){ 
    
      nom[i]=nom[i].charAt(0).toUpperCase()+a[i].substring(1,a[i].length);
    }; return a
};


document.write(mayus(nom));


//Crear una función que dado un número y un array de números, te devuelva  por pantalla la 
//posición donde se encuentra el número o  -1 si no lo encuentra.(medium)


let position = [1,30,56,81,115,87,97]
let num = 87
let result = ""

function np (position){
    for( let i=0; i<position.length; i++){
        if(position[i]==num){ result=i
        }
    }; return result;

}

document.write(np(position));