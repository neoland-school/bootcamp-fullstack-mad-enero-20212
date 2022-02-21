import react, { useRef } from "react";
import { useEffect, useState,formElem } from "react"


const filterbycountriesandcapital = (countries, countrysearch,capitalsearch) => {
    const co = countrysearch.toLowerCase();
    const ca= capitalsearch.toLowerCase();
    
    
    return countries.filter( c => c.name.toLowerCase().includes(co)
                            && c.capital.toLowerCase().includes(ca)
    
    
    
    )
}





function Filter(){
    const [countries,updateCountries] = useState([]);
    const [filterarray,updatefiltercountries]= useState([]);
   const formElem= useRef(null); // primer paso es obtener un elemento referenciado . tenemos que tener un formulario

useEffect(() =>{
    fetch('')
    .then( r => r.json())
    .then(d => { 
        updateCountries(d.data)
        updatefiltercountries(d.data)
    
    
    }); // aqui es .data porque la informacion esta en data


},[]);

console.log(countries);// en el mount esto pintara []

const filterbycountriesEvent = () =>{
    const newfiltered= 
    filterbycountriesandcapital(
        countries,
        formElem.current.countries.value,
        formElem.current.capital.value,
        ); // el current. value es al name del input

    updatefiltercountries(newfiltered);

}


// si hay muchos filtros poner etiqueta FORM

    return (
        <react.Fragment>
            <form ref= {formElem}> 
        <input onChange={filterbycountriesEvent} type= 'text' name='countries' placeholder="Country"> </input>
        <input onChange={filterbycountriesEvent} type= 'text' name='capital' placeholder="Capital"> </input>
        </form>
  <ul>
      {filterarray.map( c =>(
          <li key={c.iso3 + c.name}>
              <h4>{c.name}</h4>
              <h5> su capital es :{c.capital}</h5>
              <p> su codigo iso es :{c.iso2}</p>



          </li>



      ) )}


  </ul>
  </react.Fragment>
    
    )


    
}

export default Filter