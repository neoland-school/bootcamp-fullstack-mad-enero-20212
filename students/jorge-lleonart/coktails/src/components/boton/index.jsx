import { useContext } from "react"
import numberContext from "../../context/context";



function Boton(){

    const {updatedNumber} = useContext(numberContext)
    
    return(
        <button onClick={updatedNumber}>Pulsar</button>
    )
}

export default Boton;