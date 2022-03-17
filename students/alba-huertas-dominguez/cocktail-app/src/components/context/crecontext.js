//1. crear un usecontext, es decir nuestros valores que le vamos a pasar siempre a toda nuestra aplicacion.

import { createContext } from "react";
export const themes={

    dark:{
        color:"red",
        background:"black"}
        ,

       light:{

        color:"yellow",
        background:"white"
       }
    }

export const DataContext = createContext();