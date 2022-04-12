import { createContext, useState } from "react";

const usercontext = createContext()

function UserProvider({children}){
    let[data,updatedata]=useState({});
    
    return <usercontext.Provider value={{data,updatedata}}> {children} </usercontext.Provider>


}

export default usercontext
export {UserProvider}