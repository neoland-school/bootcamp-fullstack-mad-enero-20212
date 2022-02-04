//  ejercicio de alex  para crear array desde prompt
// let arr = [];

// for(let i=0; i<5; i++){
//    const userNumber = parseFloat(prompt('Dame el siguiente número'));
//    arr[i] = userNumber;
// }

// console.log(arr); // 5
// let sumAcc = 0;
// for(let i=0; i<arr.length; i++){
//    sumAcc += arr[i];
// }

// console.log(sumAcc)


// 1.Crea un array de números por prompt e imprimelo por pantalla.(easy).

// let arr = [];

// for(let i=0; i<6; i++){
//     arr[i] = parseFloat(prompt('Dame el siguiente número'));
// }
// document.write(arr)


// 2.Crear una función que reciba por parámetros 2 array. Esta función devolverá los 2 arrays concatenados y los mostrará en el navegador.(easy)
// let arr1= [2,3,4,];
// let arr2= [5,6,7];

// function concat(array1,array2){
//     return document.write(`<p>${array1}${array2}</p>`);
// }

// concat(arr1,arr2);

// 3.Crea un array  de música rock que contenga subgeneros [punk, metal, hardcore], luego un array de los géneros musicales [rock, pop, country] en el array de los géneros musicales 'rock' será el array de subgéneros de música rock, luego crea un array de banda que contenga un string "metallica" y el array de géneros y con ese array de banda muestra por pantalla el nombre de la banda "metallica" y el subgénero "metal".(easy)


// let rock = ["punk","metal","hardcore"];
// let gen = [rock,"pop","country"];
// let banda =["metallica",gen];

// document.write(banda[0]+' , '+rock[1]);




// 4.Crear una función que reciba un parámetro de entrada y que imprima por pantalla true si el parámetro es un array y false si es otro tipo de dato.(easy)
// let arrc= []
// function verificar (a){
//     const b= []
//     return document.write(typeof(a)===typeof(b));
// }

// verificar(arrc)




// 5.Crear una función que reciba un array de 10 números e imprima por pantalla true si todos son mayor de 10 o false en caso contrario.(easy)

// let arrdes= [1,4,2,6,6,9,3,5,6,8];

// function comprobacion(a){

//     let contador= 0;

//     for(i=0; i<10; i++){
//         if (a[i]>10) {
//             contador=contador+1;
            
//         }else{
//             contador=contador
//         }
//     }
    
//     return document.write(contador===10)
// }

// comprobacion(arrdes)


// 6.Crea una función que reciba un array y una palabra y devuelva true o false si palabra existe o no dentro del array.(easy)

// let arrpru=["hola","bola","jorgellorica"];
// let palabra = "jorgellorica"
// function rastrear(a,b){
//     let contador=0
//     for( i= 0; i <a.length; i++){
//         if(a[i]===b){
//             document.write(a[i]===b);
//             break;
//         }else{
//             contador=contador+1
//         }
//     }
//     if (contador===a.length){
//         document.write(false)    
//     }
// }

// rastrear(arrpru,"jorgellorica")

// 7. Crear una función que reciba un array de números y devuelva un array con los que son mayores que 10.(easy)

// let numeritos= [2,4,7,2,19,57,2]

// function comprobacion(a){
//     for(i=0; i<a.length; i++){
//         if (a[i]>10) {
//             document.write(a[i]+" ")
                
//         }
            
//     }
        
    
// }

// comprobacion(numeritos)

// 8.Crear una función que reciba un array de strings e imprime por pantalla el array con los strings capitalized, ejmp: let =[jose,maca,jorge], output: [Jose,Maca,Jorge].(medium)

// let nombrecitos =["jose","maca","jorgehuevon"];
// function mayusculas(a){
//     for (i=0; i<a.length; i++){
//         a[i]= a[i].charAt(0).toUpperCase()+a[i].substring(1, a[i].length);
//     } 
//     document.write(a+',')
// }

// mayusculas(nombrecitos)





// 9/Crear una función que dado un número y un array de números, te devuelva  por pantalla la posición donde se encuentra el número o  -1 si no lo encuentra.(medium)


// let numericos= [1,2,4,3,7]

// let num = 7
// function rastrear(a,b){
//     let contador=0
//     for( i= 0; i <a.length; i++){
//         if(a[i]===b){
//             document.write(`<p> El numero está en laposicion ${i}, bitch  </p>`);
//             break;
//         }else{
//             contador=contador+1
//         }
//     }
//     if (contador===a.length){
//         document.write(-1)    
//     }
// }

// rastrear(numericos,num)

// 10. Crea una función que al pasarle por parametro un array y un número, esta devuelva el array dividido en tantos sub-arrays como sea necesario, basándonos en el número dado por parámetro que indique su tamaño: ([1,2,3,4],2), output: [[1,2],[3,4]] o ([1,2,3,4,5],2), output: [[1,2],[3,4][5].(hard)


// let arrayentero= [1,2,3,4,]

// function separacion (a,b){
//     let b= 
    
    
// }


// 11.Crear una función para ordenar un array de números desordenados de mayor a menor.(leyenda)

let desordenados= [2,5,7,2,6,5]

function ordenar (a){
    let arrord= []
    for(i=0; i<a.length; i++){
        for (j=i+1; j<a.length; j++){
            let contador= 0
            if (a[i]<a[j]){
                contador=contador+1
            }
            if (contador===a.length-i){
                arrord[arrord.length]=a[i]
            }
        }    

           

    }  
         
            





}

// let numeritos= [2,4,7,2,19,57,2]

// function comprobacion(a){
//     for(i=0; i<a.length; i++){
//         if (a[i]>10) {
//             document.write(a[i]+" ")
                
//         }
            
//     }
        
    
// }

// comprobacion(numeritos)









