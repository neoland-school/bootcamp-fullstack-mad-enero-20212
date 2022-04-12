import React, { useState } from "react"
import react from "react";



function Child() {
    let [change, updatechange] = useState('');
  const handler = e => {
        updatechange(e.target.value);

    }


    return (

        <React.Fragment>
            <input type="text" onChange={handlerOn}></input>
            <p>texto input{change}</p>
        </React.Fragment>
    )


}
