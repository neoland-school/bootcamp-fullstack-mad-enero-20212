import { createContext, useState } from "react";

const themeContext = createContext()

function TrueProvider({children}){
    let [estado,updatestado]=useState(false);
    const handler = () => {
        updatestado(true)
    


    }

    const data ={handler,estado}

    
    return <themeContext.Provider value={data}>{children}</themeContext.Provider>


}

export default themeContext
export {TrueProvider}