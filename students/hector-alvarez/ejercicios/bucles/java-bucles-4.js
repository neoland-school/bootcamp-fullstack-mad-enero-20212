
/*

4. Crear una página web que solicite al usuario una palabra y muestre un p con el número de vocales que hay.

1. 

*/



let Palabra = prompt ("inserte una palabra?");
contador = 0;



for(let i=0; i<=Palabra.length; i++) {
  if ((Palabra.charAt(i)=='a') || (Palabra.charAt(i)=='e') || (Palabra.charAt(i)=='i') || (Palabra.charAt(i)=='o') || (Palabra.charAt(i)=='u'))
   
  contador++;}
  document.write("La palabra " + Palabra +  "  contiene " + contador + " vocales");
