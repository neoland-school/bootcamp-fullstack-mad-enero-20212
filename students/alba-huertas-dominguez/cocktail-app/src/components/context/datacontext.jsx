import { createContext, useState } from "react";
import { DataContext,themes } from "./crecontext";


//importar el create context, y el contexto que hemos creado nosotros (dataconext) para hacer el provider que envuelva todo.
const updatethemingcssvariables = theme =>{
    document.body.style.setProperty('--color-primary',themes.light.color);
    document.body.style.setProperty('--color-secondary',themes.dark.color);
}

const updatecurrentthem=(currentTheming) => {
    switch(currentTheming){
        case 'l':updatethemingcssvariables(themes.light); break;
        case 'd':updatethemingcssvariables(themes.dark); break;
        default:updatethemingcssvariables(themes.light);
    }
console.log(themes)
}
function ThemeProvider({children}){
    const[themdata,updatethem]=useState('l')
    updatecurrentthem(themdata)

    return(
        <DataContext.Provider value={[themdata,updatethem]}>
            {children}
            
            </DataContext.Provider> )

}

export default ThemeProvider