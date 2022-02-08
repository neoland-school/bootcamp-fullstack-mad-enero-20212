


// 1- Crear un objeto que tenga dos propiedades ('demo'  de tipo string)  y ('hello' de tipo boolean). Los valores serán 'hola' para demo y true para 'hello'


const obj={
    demo : 'hola',
    hello : true
    }


    //2. Cambiar el valor de 'hello' a false


    obj.hello = false;


    document.write(obj.hello);


// 3. Crear un objeto que represente el Pais España con las propiedades ( nombre, capital, continente y SMI (en $)). Crear otros 4 países (EEUU, China, Nueva Zelanda y Andorra).


//Mostrar en una lista de HTML los países que pertenecen a europa (editado) 

const españa = {
    nombre :'españa',
    capital : 'madrid',
    continente : 'europa',
    smi :  1000
}

const eeuu ={
    nombre :  'eeuu',
    capital : 'washington',
    continente:  'america',
    smi : 2000
}


const china ={
    nombre :  'china',
    capital : 'pekin',
    continente :  'asia',
    smi :  3376
}

const nuevaZelanda ={
    nombre :  'nuevaZelanda',
    capital :  'wellington',
    continente :  'oceania',
    smi :  2013
}

const andorra = {
    nombre :  'andorra',
    capital : 'andorraVieja',
    continente :  'europa',
    smi :  1083
}




//Añadir los objetos a un array.

const arr = [españa,eeuu,china,nuevaZelanda,andorra]

//Mostrar en una list de HTML los países que tengan un salario modal superior a 1500$
const milq= arr.filter(v => v.smi>=1500); // esto me esta devolviendo un array de objetos con los paises que superan los 1500

let crearhtlm = `<ul> `
for(let i=0; i<milq.length; i++){
   crearhtlm += ( ` <li>${milq[i].nombre}</li>`);

}
crearhtlm += `</ul>`;
document.write(crearhtlm);


// Mostrar en una lista de HTML los países que pertenecen a europa (editado) 

const europa = arr.filter(v => v.continente === 'europa');

let htlmEu = `<ul> `
for(let i=0; i<europa.length; i++){
    htlmEu += ( ` <li>${europa[i].nombre}</li>`);
 
 }
 htlmEu += `</ul>`;
 document.write(htlmEu);



 //Crear un objeto que tenga dos propiedades , entre ellas una  de tipo number, Imprimelo por pantalla el objeto y luego imprime por pantalla solo la propiedad de tipo number. 
//Repetir el proceso pero con propiedades que tengan los tipos de datos string, boolean, null, undefined , array, function, objects.(easy)


obj1 = {
    nombre: "alba",
    edad: "31"
    }
    
    document.write(obj1.nombre, obj1.edad)
    
    
    obj2 = {
        intereses:['salir','bailar','leer'],
        chica: true,
    
        }
    
        document.write(obj2.chica)



        const españa = {
            nombre :'españa',
            capital : 'madrid',
            continente : 'europa',
            smi :  1000
        }
        
        const eeuu ={
            nombre :  'eeuu',
            capital : 'washington',
            continente:  'america',
            smi : 2000
        }
        
        
        const china ={
            nombre :  'china',
            capital : 'pekin',
            continente :  'asia',
            smi :  3376
        }
        
        const nuevaZelanda ={
            nombre :  'nuevaZelanda',
            capital :  'wellington',
            continente :  'oceania',
            smi :  2013
        }
        
        const andorra = {
            nombre :  'andorra',
            capital : 'andorraVieja',
            continente :  'europa',
            smi :  1083
        }
        
        
        //Mostrar en una list de HTML los países que tengan un salario modal superior a 1500$
const milq= arr.filter(v => v.smi>=1500); // esto me esta devolviendo un array de objetos con los paises que superan los 1500
        
        
         //hacer siempre una funcion
        
         const arr = [españa,eeuu,china,nuevaZelanda,andorra]
        
         function paisFun(a){
             const mil= a.filter(v => v.smi>=1500)
             console.log(mil)
          document.write(`<ul> `)
          for(let i=0; i<mil.length; i++){ 
              document.write(` <li>${mil[i].nombre}</li>`)}
            document.write(`</ul>`)}
        
        paisFun(arr)  



        




//Crea una función que dado un objeto y un string que 
//represente el nombre de la propiedad de ese objeto, elimine esa propiedad del objeto.(easy)
obj1 = {
    nombre : 'Ana',
    edad:'30'
}

function borrar (obj,str){
    delete a[b];
    document.write(`<p>${a[b]}</p>`)
}

borrar(obj1,'edad')
;


document.write(obj1.nombre)


//Crea una función que reciba por parámetro un objeto y una propiedad, y 
//devuelva true o false si esa propiedad existe o no dentro del objeto pista (hasOwn...).(easy)

obj1 = {
    nombre : 'Ana',
    edad:'30'
}

function bo (obj,prop){

   document.write(obj.hasOwnProperty(prop))



}

bo(obj1,'nombre')

//Crea una función que imprima por pantalla el 'nombre: valor' de cada 
//propiedad del objeto  (buscar mertodos de objeto ejmp Object Keys).(easy)
obj1 = {
    nombre : 'Ana',
    edad:'30'
}

function impr (a){
 document.write(Object.entries(a))}

impr(obj1)
document.write(Object.keys(a)+Object.values(a));


//Crea una función que dado un string con una hora (ej: 14:36:57) 
//devuelva un objeto con la propiedad hora, minutos y segundos e imprimelo por pantalla.(medium)

let strh="18:00:00"


function hora(a){
    const objh ={hora:strh.substring(0,2),
        minutos: strh.substring(3,5),
        segundos: strh.substring(6,7)

    };
    document.write(objh.hora+objh.minutos+objh.segundos)

}

hora(strh)