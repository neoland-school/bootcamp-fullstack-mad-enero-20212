import React, { useEffect, useState } from "react"


function PrintP({startInterval}){

  let [arrValues, updateArrValues] = useState([]);
  let  [couter, updateCounter] = useState(0)

  useEffect(()=> {
      let interval;
      console.log(startInterval === true)
      if(startInterval){
      setInterval(() => {
          arrValues.push(couter);
          updateArrValues(arrValues);
          couter += 1;
          updateCounter(couter)
        },1000)
      return() => {
         clearInterval(interval)
        }
      }else{
        clearInterval(interval)
        updateArrValues([])
        updateCounter(0)
      }
  },[startInterval])

    return(
        <React.Fragment>
           
            {arrValues.map((n,i) => <p key={i}>{n} </p>)}
         
        </React.Fragment>
    )
}

export default PrintP