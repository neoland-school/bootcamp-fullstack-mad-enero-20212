import { useEffect } from "react";
import { useState } from "react";


function Counter() {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter(prevCount => prevCount + 1);
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <p>Count: {counter}</p>
    )
}
export default Counter;