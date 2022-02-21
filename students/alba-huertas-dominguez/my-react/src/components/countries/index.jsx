import { useEffect, useState } from "react"
import react from 'react';

// // traer datos desde el array de paises y pintar la escructura:
// 1. hay que traernos los datos con un fetch, 
//pero para que eso no este en bucle todo el rato haciendo consultas  hay que poner un useEffect.
// el useefect meteremos en then, para traernos los datos en json y le pasamos un array vacio.
// como queremos que esto lo actualice tenemos que crear una variable y una funcion igualandola a useState.
// en el return, hacemos el map de nuestro array, es decir del cambio, que en este caso es countries.

//  como tenemos que hacer un filtro necesitamos dos arrays iguales, uno para filtrar y otro que siempre sea igual.
//  como queremos cambiar el estado tenemos que tener dos funciones con useState.
//  en este caso, los dos inician en un array vacio, el primer parametro es como inicia el <Ciclo>

//  luego tendriamos que hacer un evento donde cojamos el valor que queremos, es decir el del input en este caso (con el e.target.value) y luego 
//  filtrar nuestro array original (el primer parametro) y que el nombre este incluido el valor, la variable que declaramos AuthenticatorResponse.apply
//  con el fetch nos hemos traido los datos del servidor, dos veces con la funcion que nos hara el cambio, tanto para el array original como para el array filtrado.
//  esta funcion tendra como parametro nuestro objeto y la propiedad de este que queremos, es decir c => c.countries

//  Nos devolvera el input donde nos hace el evento, es decir, el oncnhange y ahi le daremos el evento donde nos esta cambiando las cosas es decir el handler.
//  Despues hay que pintarlo, entonces tenemos que coger el array de paises donde filtramos, el parametro inicial, y ahi hacer el map.

function Countries() {
    let [paises, updateCountries] = useState([''])
    let [paisesfilter, updateCountriesfilter] = useState([''])

    const handler = e =>{
    const newValue = e.target.value.toLowerCase();
    const newArr =paises.filter( p => p.name_en.toLowerCase().includes(newValue))
    updateCountriesfilter(newArr);

}
    useEffect(() => {
        fetch("https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json")
            .then(r => r.json())
            .then(c => {
                updateCountries(c.countries)
                updateCountriesfilter(c.countries)
            })


            }, []);


        return (
            <react.Fragment>
                <input onChange={handler} type="text"></input>
                <ul>

                    {paisesfilter.map(c => <li> {c.name_en}{c.dial_code}</li>)}
                </ul>

            </react.Fragment>
        )


    }

export default Countries