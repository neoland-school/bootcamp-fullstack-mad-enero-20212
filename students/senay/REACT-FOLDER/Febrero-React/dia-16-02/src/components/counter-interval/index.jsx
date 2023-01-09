/**
 * Crear un componente CounterInterval que escriba cada segundo un número en un p. Ese número 
 * empezará en 0 y ira sumando de uno en uno cada segundo, añadiendo un p al componente (los p's 
 * de los anteriores segundos no se eliminan).
 */
// import React, { useState, useEffect } from "react";
// function CounterInterval() {
//     const [counter, setCounter] = useState(0);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCounter(prevCount => prevCount + 1);
//         }, 1000);
//         return () => {
//             clearInterval(timer);
//         };
//     }, []);

//     return (
//         <p>Count: {counter}</p>
//     );
// }
// export default CounterInterval;

// interval de Alex
import React, { useState, useEffect } from "react";

// minuto 00:39:57
function CountIntervalTwo() {

    const [counters, updateCounters] = useState([0])

    useEffect(() => {
        const intervalid = setInterval(() => {
            //version 1
            // counters.push(counters.length)
            // updateCounters([...counters])
            // end version 1
    
            // version 2. no va
            // console.log('hola');
            // updateCounters(prevCounters => {
            // });
            // end version 2
            updateCounters();
        }, 1000);
        return () => clearInterval(intervalid)
    }, []);



    return (
        <React.Fragment>
            {counters.map(c => <p key={c}>{c}</p>)}
        </React.Fragment>
    );
}
export default CountIntervalTwo;