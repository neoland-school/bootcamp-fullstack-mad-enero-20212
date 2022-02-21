import React, { useEffect, useState } from 'react';
import './style.css'
import { getCountriesFromApi } from '../../data';
import { filterByCountriesAndCapital } from './filters';

function FilterComponentExample() {

    const [originalCountries, updateCountries] = useState([]);
    const [filteredCountries, updateFilterCountries] = useState([]);
    const [searchCountry, updateSearchCountry] = useState('');
    const [capitalCountry, updateSearchCapital] = useState('');

    useEffect(() => {
        getCountriesFromApi()
            .then(d => {
                updateCountries(d)
                updateFilterCountries(d)
            });
    }, []);

    // console.log(countries);// en el mount, esto pintará []

    const filterByCountries = e => {
        // actualizo el valor del state para que el otro filtro tenga el valor 
        // de este input actualizado
        updateSearchCountry(e.target.value);
        // pedirle a mi funcion que me de el array filtrado con mi nuevo valor, utilizando
        // el valor que habia guardado el otro input
        const newFiltered = filterByCountriesAndCapital(originalCountries, e.target.value, capitalCountry )
        // actualizo el state del array filtrado para que se repinte en el HTML
        updateFilterCountries(newFiltered);
        
    }

    const filterByCapital = e => {
        updateSearchCapital(e.target.value);
        const newFiltered = filterByCountriesAndCapital(originalCountries, searchCountry , e.target.value )
        updateFilterCountries(newFiltered);
    }

    return (
        <React.Fragment>
            <form autoComplete='off'>
                <input onChange={filterByCountries} name="countries" placeholder='countries' type="text"></input>
                <input onChange={filterByCapital} name="capital" placeholder='capital' type="text"></input>
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