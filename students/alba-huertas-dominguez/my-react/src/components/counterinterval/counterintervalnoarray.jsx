import react, { useEffect } from 'react';
import React, { useState } from 'react';


function CounterIntervalNumber() {
    let [counter, updatecounter] = useState(0)


    let handler = () => { 
    
        updatecounter(c => c+1) 
        console.log(counter)

    }

    useEffect(() => {
     const intervalId = setInterval(handler, 2000)

     return() => {
     clearInterval(intervalId)
     }

    }, [counter]);
 
    

   
    return (
        <div>

       {Array(counter).fill(null).map((v,i) => <p key={i}>{i}</p>)}
       </div>
      



    )


}

export default CounterIntervalNumber