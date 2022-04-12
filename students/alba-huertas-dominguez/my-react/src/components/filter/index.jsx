import react from "react";
import { useEffect, useState } from "react"


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
    const [searchcountry, updatesearchcountry] = useState();
    const [searchcapital, updatesearchcapital] = useState()


useEffect(() =>{
    fetch('')
    .then( r => r.json())
    .then(d => { 
        updateCountries(d.data)
        updatefiltercountries(d.data)
    
    
    }); // aqui es .data porque la informacion esta en data


},[]);

console.log(countries);// en el mount esto pintara []

const filterbycountries = e =>{
    updatesearchcountry(e.target.value)
    // const countrysearch = e.target.value.toLowerCase()
    const newfiltered= filterbycountriesandcapital(countries,e.target.value,searchcapital);
    // countries.filter(c => c.name.toLowerCase().includes(countrysearch));
 
    
    updatefiltercountries(newfiltered);

}
const filterbycapital = e => {
    updatesearchcapital(e.target.value)
    // const capitalsearch = e.target.value.toLowerCase()
    const newfiltered= filterbycountriesandcapital(countries,searchcountry, e.target.value);
    // countries.filter(c => c.capital.toLowerCase().includes(capitalsearch));
    updatefiltercountries(newfiltered)
    

}




    return (
        <react.Fragment>
        <input onChange={filterbycountries} type= 'text' name='countries' placeholder="Country"> </input>
        <input onChange={filterbycapital} type= 'text' name='capital' placeholder="Capital"> </input>
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