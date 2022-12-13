import React, { useState, useEffect } from "react";


function FetchExample(props) {
    let [countries, updateCountries] = useState([]);

    // el useEffect sirve para ejecutar el código que quiero elegir en que fase del ciclo de vida
    // del componente se ejecuta
    useEffect(() => {
        // este código solo se ejecuta en los refrescos (updates) que YO como desarrollador indique
        fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
            .then(r => r.json())
            .then(c => updateCountries(c.countries));
    }, []); // el array de dependencias me indica cuando debo ejecutar este useEffect

    /*
        1- Si no pongo segundo parámetro (undefined), el useEffect se ejecuta en la fase de montado y en TODAS las de actualización
        2- Si pongo segundo parámetro y es un array vacío, el useEffect SOLO se ejecuta en la fase de MONTADO
        3- Si al array le doy elementos (variables), el useEffect se ejecuta en la fase de MONTADO y en TODAS las fase de 
          actualización donde esas variables hayan cambiado. Si TODAS variables se mantienen igual, el useEffect NO se ejecuta
     */

    // USO DEL UNMOUNT
    useEffect(() => {
        const intervalId = setInterval(() => console.log('otra vez el interva'), 1000);
        const resizeHandler = () => console.log('el tamaño de pantalla cambia');
        window.addEventListener('resize', resizeHandler);

        return () => {
            // esta función se ejecutará en la fase de UNMOUNT
            clearInterval(intervalId); // eliminamos el intervalo en la fase de desmontado
            window.removeEventListener('resize', resizeHandler); // elminamos el listener del resize
        };

    }, []);

    return (
        <React.Fragment>
            <ul>
                {countries.map(c => <li>{c.name_en}</li>)}
            </ul>
        </React.Fragment>
    )
}


export default FetchExample;
