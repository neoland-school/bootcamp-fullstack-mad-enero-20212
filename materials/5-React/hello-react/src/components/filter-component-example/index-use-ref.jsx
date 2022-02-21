import React, { useEffect, useState, useRef } from 'react';
import './style.css'
import { getCountriesFromApi } from '../../data';
import { filterByCountriesAndCapital } from './filters';

function FilterComponentExample() {

    const [originalCountries, updateCountries] = useState([]);
    const [filteredCountries, updateFilterCountries] = useState([]);
    // el primer paso es generar un objeto con posibilidad de ser referenciado
    const formElem = useRef(null); 

    useEffect(() => {
        getCountriesFromApi()
            .then(d => {
                updateCountries(d)
                updateFilterCountries(d)
            });
    }, []);

    // console.log(countries);// en el mount, esto pintará []

    const filterCountriesEvent = () => {
        const newFiltered = 
            filterByCountriesAndCapital(
                    originalCountries, 
                    // obtenemos el valor acualizado del input countries
                    formElem.current.countries.value, 
                    // obtenemos el valor acualizado del input capital
                    formElem.current.capital.value
                )
        updateFilterCountries(newFiltered);
        
    }

    return (
        <React.Fragment>
            {/* Asigno la variable creada por useRef al formulario. 
                formElem.current tendrá el objeto del form*/ }
            <form ref={formElem} autoComplete='off'>
                <input onChange={filterCountriesEvent} name="countries" placeholder='countries' type="text"></input>
                <input onChange={filterCountriesEvent} name="capital" placeholder='capital' type="text"></input>
            </form>
            <ul>
                {filteredCountries.map(c => (
                    <li key={c.iso2 + c.name}>
                        <h4>{c.name}</h4>
                        <h5>Su capital es: {c.capital}</h5>
                        <p>{c.iso2}</p>
                        <p>{c.iso3}</p>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    )
}


export default FilterComponentExample;