import { useContext } from "react"
import { DataContext } from "../context/crecontext"

function ThemingSelector(){
    const[themdata,updatethem]=useContext(DataContext)
    const Changetheme = e =>{
        updatethem(e.target.value);
        console.log(e.target.value)


    }

return(
    <div onChange={Changetheme}>
        <label htmlFor="light">Light</label>
        <input id="light" type='radio' value="l" name="theme" defaultChecked={themdata === 'l'}></input>
        <label htmlFor="dark">Dark</label>
        <input id= "dark" type='radio' value = "d" name="theme"defaultChecked={themdata === 'd'}></input>



    </div>
)


}

export default ThemingSelector