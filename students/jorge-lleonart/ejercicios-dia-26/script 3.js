// 1. Crea un array de números por prompt e imprimelo por pantalla.(easy).

// let arr = [];

// for(let i=0; i<4; i++){
//    const userNumber = parseFloat(prompt('Dame un numero'));
//    arr[i] = userNumber;
// }

// document.write(arr)


// 2. Crear una función que reciba por parámetros 2 array. Esta función devolverá los 2 arrays concatenados y los mostrará en el navegador.(easy)

// let arr1=[1,2,3];
// let arr2=[2,8];

// function concat(array1,array2){
//     document.write(array1+array2);
// }
// concat(arr1,arr2);


// 3. Crea un array  de música rock que contenga subgeneros [punk, metal, hardcore], luego un array de los géneros musicales [rock, pop, country] en el array de los géneros musicales 'rock' será el array de subgéneros de música rock, luego crea un array de banda que contenga un string "metallica" y el array de géneros y con ese array de banda muestra por pantalla el nombre de la banda "metallica" y el subgénero "metal".(easy)

// let sub = ["punk","metal","hardcore"];
// let gen = [sub,"pop","country"];
// let banda = ["metallica",gen];

// document.write(banda[0]+' '+sub[1]);

// 4. Crear una función que reciba un parámetro de entrada y que imprima por pantalla true si el parámetro es un array y false si es otro tipo de dato.(easy)

// let arrc=[];
// function verif(a){
//     const b=[];
//     return document.write(typeof(a)===typeof(b));
// }

// verif(arrc);

// 5. Crear una función que reciba un array de 10 números e imprima por pantalla true si todos son mayor de 10 o false en caso contrario.(easy)

// let arr = [11,14,12,13,18,11,12,14,13,14]

// function menor(a){
//     let counter = 0;
//     for(i=0;i<10;i++){
        
//         if(a[i]>10){
//             counter=counter+1;
//         } else{
//             counter=counter;
//         }      
//     }
//     document.write(counter===10);
// }

// menor(arr)


// 6.Crea una función que reciba un array y una palabra y devuelva true o false si palabra existe o no dentro del array.(easy)

// let arr1= ['hola','mundo','maca'];

// function rastr(a,b){
//     let counter=0;
//     for(i=0;i<a.length;i++){ 
//         if(a[i]===b){
//             document.write(a[i]===b)
//             break
//         }else {
//             counter=counter+1
//         }
//     }
//     if (counter===a.length){
//         document.write(false)
//     }
// }

// rastr(arr1,'hhjkh')

// 7. Crear una función que reciba un array de números y devuelva un array con los que son mayores que 10.(easy)

// let arr = [11,14,12,13,18,11,12,14,13,14]

// function menor(a){
//     for(i=0;i<a.length;i++){   
//         if(a[i]>10){
//             document.write(a[i]+' ');
//         }    
//     }
// }

// menor(arr)

// 8. Crear una función que reciba un array de strings e imprime por pantalla el array con los strings capitalized, ejmp: let =[jose,maca,jorge], output: [Jose,Maca,Jorge].(medium)

// let nombres = ['jose','maca','jorge']

// function capit(a){
//     for(i=0;i<a.length;i++){ 
//         a[i]=a[i].charAt(0).toUpperCase()+a[i].substring(1,a[i].length);        
//     }
//     document.write(a);
// }
// capit(nombres)

// 9.Crear una función que dado un número y un array de números, te devuelva  por pantalla la posición donde se encuentra el número o  -1 si no lo encuentra.(medium)

// let arr1= [3,4,6,232];

// function rastr(a,b){
//     let counter=0;
//     for(i=0;i<a.length;i++){ 
//         if(a[i]===b){
//             document.write(`<p>El numero se encuentra en la posición ${i}</p>`);
//             break
//         }else {
//             counter=counter+1
//         }
//     }
//     if (counter===a.length){
//         document.write(`${b} -1`)
//     }
// }

// rastr(arr1,6)

// 10.Crea una función que al pasarle por parametro un array y un número, esta devuelva el array dividido en tantos sub-arrays como sea necesario, basándonos en el número dado por parámetro que indique su tamaño: ([1,2,3,4],2), output: [[1,2],[3,4]] o ([1,2,3,4,5],2), output: [[1,2],[3,4][5].(hard)

// let arr = [1,2,3,4,5];
// let num = 2;
// console.log('hola')

// // function subs(a,b){
    
// //     let array1=[];
// //     let array2=[];
// //     for (i=0;i<a.length;i+b){
// //         array1[array1.length]=array2;
// //         for(j=i;j<=b+i;j++){
// //             array2[array2.length]=a[j];
// //         }
// //     }
// //     document.write(array1);
// // }

// // subs(arr,num);


//11. Crear una función para ordenar un array de números desordenados de mayor a menor.(leyenda)

// let desordenados= [2,5,7,2,6,5]
// function ordenar (a){
//     let arrord= []
//     for(i=0; i<a.length; i++){
//         for (j=i+1; j<a.length; j++){
//             let contador= 0
//             if (a[i]<a[j]){
//                 contador=contador+1
//             }
//             if (contador===a.length-i){
//                 arrord[arrord.length]=a[i]
//             }
//         }    
//     }  
// }

// ordenar(desordenados)

