/*
4. Crear una página web que solicite al usuario 
una palabra y muestre un p con el número de vocales
 que hay.

*/

//Paso el resultado del string ingresado por el usuario a minúscula
let word = prompt(`Ingrese una palabra.`).toLocaleLowerCase();
let vowels = 0;


for(let n = 0; n <= word.length; n++){
    if(word.charAt(n)==='a'){
      vowels = vowels +1 ;
   }else if(word.charAt(n)==='e'){
      vowels = vowels +1 ;
   }else if(word.charAt(n)==='i'){
      vowels = vowels +1 ;

   }else if(word.charAt(n)==='o'){
      vowels = vowels +1 ;

   }else if(word.charAt(n)==='u'){
      vowels = vowels +1 ;

   }
  
}
document.write(`El número de vocales de la palaba ${word} es ${vowels}.`);