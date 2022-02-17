/**
 * Crear un componente CounterInterval que escriba cada segundo un número en un p. Ese número 
 * empezará en 0 y ira sumando de uno en uno cada segundo, añadiendo un p al componente (los p's 
 * de los anteriores segundos no se eliminan).
 */
import React, { useState, useEffect } from "react";

//     function CounterInterval() {

//     const [counter, updateCounter] = useState(0); 

//     useEffect(() => {
//         const interval = setInterval(() => {
//             updateCounter(counter + 1);
//         }, 5000);
//     });
//     return <p>{counter}</p>;
// };
// export default CounterInterval;

function CounterInterval() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter(prevCount => prevCount + 1);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <p>Count: {counter}</p>
    );
}
export default CounterInterval;
