// 1- Crear un objeto que tenga dos propiedades ('demo'  de tipo string)  y ('hello' de tipo boolean). Los valores serán 'hola' para demo y true para 'hello'
// const obj= {
//     demo: 'hola',
//     hello: 'ey'==="ey"
    
// }

// document.write (obj.demo)

// 2.2. Cambiar el valor de 'hello' a false

// const obj= {
//     demo: 'hola',
//     hello: 'ey'==="ey"
        
// }
// obj.hello=["ey"==="eeey"];
// document.write(obj.hello);

// 33. Crear un objeto que represente el Pais España con las propiedades ( nombre, capital, continente y SMI (en $)). Crear otros 4 países (EEUU, China, Nueva Zelanda y Andorra).
// Añadir los objetos a un array.
// Mostrar en una list de HTML los países que tengan un salario modal superior a 1500$
// Mostrar en una lista de HTML los países que pertenecen a europa

const españa={
    nombre: "España",
    capital: "Madrid",
    continente: "europa",
    smi: 978678
}

const eeuu= {
     nombre: "eeuu",
     capital: "whasigton",
     continente: "america del sur",
     smi: 1.024
}

const china={
    nombre: "china",
    capital: "pekin",
    continente: "asia",
    smi: 8767
}

const repca={
    nombre: "republica independiente de mi casa",
    capital: "sofa",
    continente: "escorial",
    smi: 10
}


let arrpa= [españa,eeuu,china,repca]

// document.write(arrpa)


// const smimay= arrpa.filter(v=> v.smi>1500);

// let htmloutput= `<ul>`

// for(i=0; i<smimay.length; i++ ){
//     htmloutput=htmloutput+`<li> ${smimay[i].nombre}</li>`    

// }htmloutput+=`</ul>`




// document.write(htmloutput);

// const eusi=arrpa.filter(v=> v.continente==='europa');




// const pert = arrpa.filter(v => v.continente==='uropa');
// let htmlOutput = `<ul>`
// for ( i = 0; i < pert.length; i++) {
//     htmlOutput+=`<li>${pert[i].nombre} </li>`;    
// }
// htmlOutput += `</ul>`
// document.write(htmlOutput);

4.  Dado el objeto que se encuentra en el siguiente JS, mostrar en el HTML la siguiente informacion:
¿Cuántos países empiezan por J?
¿Cual es el país cuyo código es 'MG'?
¿Cual es el país con más letras en su nombre?
Mostrar los países que terminan por s






    
    
