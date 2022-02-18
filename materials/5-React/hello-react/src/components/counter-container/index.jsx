import CounterInterval from "../counter-interval";
import CounterIntervalNumber from "../counter-interval-number";
import {useState} from 'react'

function CounterContainer(){
    const [checked, updateChecked] = useState(false);
    const handleChange = e => updateChecked(e.target.checked);

    return(
        <div>
            <input onChange={handleChange} type='checkbox'></input>
            {checked ? <CounterInterval></CounterInterval> : ''}
            <CounterIntervalNumber></CounterIntervalNumber>
        </div>
    )

}


export default CounterContainer;