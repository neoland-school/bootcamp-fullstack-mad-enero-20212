import '../EmptyBox/style.css';
import { useState } from "react";


function EmptyBox(prop){

    console.log(prop)
    let [isShown, setIsShown] = useState(true);


    

    return <div className='emptyBox' 
    //en las funcones, actualizo la variable y ademas, mando la informacion al padre (prop.hover(isShown))
    onMouseEnter={e => {setIsShown(false); prop.hover(isShown)}}
    onMouseLeave={e => {setIsShown(true); prop.hover(isShown)}}
   >
    </div>
}

export default EmptyBox;