import {createContext} from 'react';
import { useState } from 'react';

const CurrencyContext = createContext(); 

// Este es el componeten wrapper que expone funciones de actualización
function CurrencyProvider({ children }) {

    const [currencyState, updateCurrencyState] = useState({});

    return (
        <CurrencyContext.Provider value={{currencyState,updateCurrencyState}}>
            {children}
        </CurrencyContext.Provider>
    )
}

export default CurrencyContext;
export {CurrencyProvider};