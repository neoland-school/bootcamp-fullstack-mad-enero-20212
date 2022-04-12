import React, { useState } from "react";
import PrintP from "../CounterInterval";

function ContainerCounter(){

    const [check, checked] = useState('')
   /*
    const checkedValue = (e) => {
        const checked = e.target.checked;
        if(checked){
           console.log('chekeao')
        }else{
            console.log('unchecked')
        }
    }
    */

    function handleCheck(e){
        if(e === true){
            checked('chek')
        }else {
            checked('na')
        }
    }
    
    

   


    return(
        <React.Fragment>
            <input type='checkbox' onChange={handleCheck}></input>
            <PrintP startInterval={check}></PrintP>
        </React.Fragment>
    )
}

export default ContainerCounter