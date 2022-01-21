

/*
2.Crea un programa que recorra los números del 1-100 e imprima por pantalla :
Fizz, si es multiplo de 3.
 Buzz, si es múltiplo de 5.   
  FizzBuzz, si es múltiplo de 3 y 5 a la vez.
  */


let i=0


for(i; i<101; i++) {

  if( i%3==0 && i%5==0 )
  {
document.write(`<p>${i} es fizzbuzz </p>`);
  }

    else if( i%3==0 )
      {
  document.write(`<p>${i} es fizz </p>`);

      }

    
    else if ( i%5==0 )
      {
  document.write(`<p>${i} es buzz </p>`);

      }

}
