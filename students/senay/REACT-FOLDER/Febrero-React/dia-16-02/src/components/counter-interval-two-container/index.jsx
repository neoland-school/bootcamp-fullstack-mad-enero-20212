import { useState } from "react";
import CountIntervalTwo from "../counter-interval";




function IntervalTwoContainer() {

    const [checked, setChecked] = useState(false);
    const handleChange = e => setChecked(e.taget.checked);
    

    return ( 
        <div>
            <input onChange={handleChange} type="checkbox"></input>
            {checked ? <CountIntervalTwo></CountIntervalTwo> : ''}
        </div>
    );
}

export default IntervalTwoContainer;