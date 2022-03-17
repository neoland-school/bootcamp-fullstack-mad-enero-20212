import React from "react"
import Hijo from "../hijo"
import { useContext } from "react"
import numberContext from "../../context/context";
function Homess(){

const {number}=  useContext(numberContext)
console.log(number)
    return (
    <React.Fragment>
    <p>{number}</p>
    <Hijo></Hijo>
    </React.Fragment>)
}
    


export default Homess