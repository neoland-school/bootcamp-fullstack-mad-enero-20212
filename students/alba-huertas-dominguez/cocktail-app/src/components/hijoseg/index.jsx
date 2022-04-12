
import { useContext } from "react"
import numberContext from "../../context/context";


function HijoSeg(){
    const {handler}= useContext(numberContext)
    console.log()


    return <button onClick={handler}>+</button>
}

export default HijoSeg