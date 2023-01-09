import React, { useState } from "react";
import GreenButton from "../green-button";




function SumaResta() {
    let [count, setCount] = useState(0);
    return (
        <React.Fragment>
            {/* <button onClick={() => setCount(++count)}>+</button>
            <p>{count}</p>
            <button onClick={() => setCount(--count)}>-</button>
            <SumaResta></SumaResta> */}
            <GreenButton></GreenButton>
        </React.Fragment>
    )
}
export default SumaResta;