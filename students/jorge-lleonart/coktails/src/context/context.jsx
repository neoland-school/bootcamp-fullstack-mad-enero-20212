import { createContext, useState } from "react";

const numberContext = createContext();

function NumberProvider({children}){

    let [number,updateNumber]=useState(0);
    let updatedNumber = () => updateNumber(++number);
    const data = {updatedNumber,number}
    return <numberContext.Provider value={data}>{children}</numberContext.Provider>
}

export {NumberProvider};
export default numberContext;

