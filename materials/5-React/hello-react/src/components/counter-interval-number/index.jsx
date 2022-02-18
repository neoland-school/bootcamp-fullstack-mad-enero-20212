import React, { useEffect, useState } from 'react';

/**
 * 1. Crear un useEffect donde dentro tengamos un intervalo que se ejecute
 *    cada segundo
 * 
 */

function CounterIntervalNumber() {
    const [counter, updateCounter] = useState(0); 

    useEffect(() => {
        const intervalId = setInterval(() => {
            // esta forma funcional de actualizacion se utiliza cuando 
            // el nuevo valor de counters depende del anterior
            updateCounter(c => c+1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <React.Fragment>
            {Array(counter).fill(null).map((_v,i) => <p key={i}>{i}</p>)}
        </React.Fragment>
    );

}


export default CounterIntervalNumber;