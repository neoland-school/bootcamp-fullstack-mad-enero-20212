import { createContext, useState } from "react";

const numberContext = createContext()

function NumebrProvider({children}){
    let [number,updatenumber]=useState(0);
    const handler = () => {
        updatenumber(number++)


    }

    const data ={handler,number}
    
    return <numberContext.Provider value={data}>{children}</numberContext.Provider>


}

export default numberContext
export {NumebrProvider}