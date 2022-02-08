for( let i=1;i<=10;i=i+1 ){
    document.write(i);

};
let i=1;
while(i<=20){document.write('<div class=></div>');
    i++;
}


for(let i =1;i<=100;i++){document.write('<div class=container1>hola</div>');
}


hacer 100 divs de diferentes colores y dividir entre pares e impares

for(let i =1;i<=100;i++){


    if(i % 2 === 0) {document.write('<div "class=container1"></div>');
    }else{document.write('<div class="container2"></div>');
    };
    };



    le he cambiado el estilo css y le he puesto display inline flex para sea responsive

for(let i =1;i<=100;i++){

    if(i % 2 === 0) {document.write('<div class="container1"></div>');
    }else{document.write('<div class="container2"></div>');
    };
    };

    

    las primeras 100 potencias de 2


    for(let p=0;p <100; p++){
        document.write(Math.pow(2,p)+"<br>");
    
    
    
    }


    HACER UNA TABLA DE MULTIPLICAR PREGUNTANDO EL NUEMRO:

    const NUM=parseFloat(prompt('Esribe un número' ));

let i=1 


while(i<=10){
    document.write("<P></P>"+NUM+" X "+i+" = "+NUM*i);
    i++;
};


PARA EVALUAR CUANTAS VOCALES TIENE UNA PALABRA:

let Palabra = prompt ("inserte una palabra?");
contador = 0;



for(i=0; i<=Palabra.length; i++) {
  if ((Palabra.charAt(i)=='a') || (Palabra.charAt(i)=='e') || (Palabra.charAt(i)=='i') || (Palabra.charAt(i)=='o') || (Palabra.charAt(i)=='u'))
   
  contador++;}
  document.write("La palabra " + Palabra +  "  contiene " + contador + " vocales");

