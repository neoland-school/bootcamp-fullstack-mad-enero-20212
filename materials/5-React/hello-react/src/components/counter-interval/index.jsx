import React, { useEffect, useState } from 'react';

/**
 * 1. Crear un useEffect donde dentro tengamos un intervalo que se ejecute
 *    cada segundo
 * 
 */

function CounterInterval() {
    const [counters, updateCounters] = useState([0]); 

    useEffect(() => {
        const intervalId = setInterval(() => {
            // primera version: actualización con valor
            // counters.push(counters.length);
            // updateCounters([...counters]);
            console.log('hola');
            // esta forma funcional de actualizacion se utiliza cuando 
            // el nuevo valor de counters depende del anterior
            updateCounters(prevCounters => {
                // copiamos el array lo primero 
                const copy = [...prevCounters]; 
                // actualizamos
                copy.push(copy.length);
                return copy; // devolvemos el array atualizado
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <React.Fragment>
            {counters.map(c => <p key={c}>{c}</p>)}
        </React.Fragment>
    );

}


export default CounterInterval;