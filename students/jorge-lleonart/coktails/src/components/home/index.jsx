import React from "react";
import Hijo from "../hijo"
import {useContext} from "react"
import numberContext from "../../context/context";
import { NumberProvider } from "../../context/context";

function Home(){
    let {number}= useContext(numberContext)
    return( 
    <React.Fragment>
        <p>{number}</p>
        <Hijo></Hijo>
    </React.Fragment>
    )
}

export default Home;