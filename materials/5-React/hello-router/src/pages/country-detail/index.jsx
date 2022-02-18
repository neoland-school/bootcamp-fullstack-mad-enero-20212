import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { getCountriesFromApiByIsoCode } from '../../api';

function CountryDetail(){
    const pathParams = useParams();
    const [country, updateCountry] = useState({});

    useEffect(() => {
        getCountriesFromApiByIsoCode(pathParams.code)
        .then(c => updateCountry(c))
    }, [pathParams.code]);

    return <h1>Página Country con capital {country.capital}</h1>
}


export default CountryDetail;