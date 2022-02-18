import React, { useEffect, useState } from "react";
import InputText from "../Hijo_ej1";

function Paises() {

   let [arrayPaises, uploadArrayPaises] = useState([]);
   let [arrayPaisesFilter, uploadArrayPaisesFilter] = useState([]);

      useEffect(() => {
         fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
            .then(r => r.json())
            .then(c => {uploadArrayPaises(c.countries);
               uploadArrayPaisesFilter(c.countries)})
      }, []);

   
  

   function handleInputText(text) {
      console.log(text)
      const filter = arrayPaises.filter(e => e.name_es.includes(text));
      uploadArrayPaisesFilter(filter);

      
   }



   return (
      <React.Fragment>
         <InputText text_prop={handleInputText}></InputText>
         <ul>
            {arrayPaisesFilter.map(e =>
               <li>{e.name_es} - {e.dial_code}</li>

            )}
         </ul>
      </React.Fragment>

   )
}

export default Paises;