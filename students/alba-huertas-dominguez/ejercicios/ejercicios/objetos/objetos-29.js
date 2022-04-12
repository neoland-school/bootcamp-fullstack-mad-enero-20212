//4.  Dado el objeto que se encuentra en el siguiente JS, mostrar en el HTML la siguiente informacion:
    //¿Cuántos países empiezan por J?

    function pais(arrob) {
        const pj = arrob.filter(v => v.name.startsWith('J'));
        return pj.length
    }
    
    document.write(pais(countryListAllIsoData))
    
    
    //4.  Dado el objeto que se encuentra en el siguiente JS, mostrar en el HTML la siguiente informacion:
        //¿Cuántos países empiezan por J?
    
        const pn = countryListAllIsoData.filter(v => v.name.startsWith('J'));
    
        let lista= `<ul> `;
        for( let i=0; i<pn.length; i++){
            document.write(`<li>${pn[i].name}</li>`)
        }
        lista += `</ul>`;
    
        document.write(lista);


       //¿Cual es el país cuyo código es 'MG'?

 const mg1 = countryListAllIsoData.find (v => v.code ==="MG");
 
 document.write(mg1.name)


//mismo ejercicio pero con funcion
 function codigo (a){ 
	let result= a.find(v => v.code === "MG");
	document.write(result.name)

  }

  codigo(countryListAllIsoData)

  // mismo ejercicio con otra funcion
  function codigob (b){
	let resultb = b.find(v => v.code === "MG");
	return resultb.name
  }
  
 document.write(codigob(countryListAllIsoData))
 



  
//¿Cual es el país con más letras en su nombre?
 


const letras = countryListAllIsoData.map(v => v.name.length);

const ord = letras.sort((a,b) =>{
    return b-a;
});
document.write(ord)

const pais = countryListAllIsoData.find(v => v.name.length>=58);

document.write(pais.name);



//Mostrar los países que terminan por s


const ps = countryListAllIsoData.filter(v => v.name.endsWith('s'));
    
let listaS= `<ul> `;
for( let i=0; i<ps.length; i++){
    document.write(`<li>${ps[i].name}</li>`)
}
listaS += `</ul>`;

document.write(listaS);



//Crea una función que dado un array de objetos "producto" 
//que contiene (id, nombre, tipo, precio) devuelva el precio total de todos los productos.(medium)

const producto = [
	tomate= { 
		id:1,
		nombre:"tomate",
		tipo:"hortaliza",
		precio:1.50
	}
	,
	patata={ 
		id:2,
		nombre:"patata",
		tipo:"tuberculo",
		precio:2.70
	}
,
pollo = { 
	id: 3,
	nombre: "pollo",
	tipo: "carne",
	precio: 6.80
}

]

// con funcion

function precio(a){
	const sum = a.map(v => v.precio).reduce((acc,v,i,arr)=> acc+v,0);
	document.write(sum)
}

precio(producto)

// sin funcion
const suma= producto.map(v => v.precio).reduce((acc,v,i,arr) => acc+v,0)

 document.write(suma)

 //Hacer una función que me devuelva la velocidad media de todos los coches.(medium)

const coches = [coche1,coche2,coche3,coche4];

function velocidad (a){
	const suma= a.map(v => v.velocidad).reduce((acc,v,i,arr)=> acc+v,0);
	document.write(suma/a.length)


}

velocidad(coches)
