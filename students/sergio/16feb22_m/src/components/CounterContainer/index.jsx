import React from "react";
import { useState } from "react";
import CounterInterval from "../CounterInterval";

function CounterContainer(){

    let [state, uploadState] = useState('false');

    const handleCheckbox = e => {
        uploadState(e.target.checked)
    }

    return (
    <React.Fragment>
        <input type='checkbox' onChange={handleCheckbox}></input>
        <CounterInterval reply={state}></CounterInterval>
    </React.Fragment>
)
}

export default CounterContainer;