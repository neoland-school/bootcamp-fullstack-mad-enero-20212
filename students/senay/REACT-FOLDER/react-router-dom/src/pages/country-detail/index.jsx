import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountriesFromApiByIsoCode } from "../../api";


function CountryDetail() {
    const pathParams = useParams();
    const [country, setCountry] = useState({});

    useEffect(() => {
        getCountriesFromApiByIsoCode(pathParams.code)
            .then(c => setCountry(c))
    }, [pathParams.code]);

    return (
        <h1>Pagina Country con capital {country.capital}</h1>
    );
}

export default CountryDetail;