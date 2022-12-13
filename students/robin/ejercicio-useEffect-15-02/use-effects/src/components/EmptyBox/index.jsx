
import { useState } from 'react'
import './style.css'

function EmptyBox({setColor}){



    return(
        <div className="empty-box" onMouseLeave={() => setColor(false)} onMouseOver={() => setColor(true)}>

    </div>
    )
}

export default EmptyBox