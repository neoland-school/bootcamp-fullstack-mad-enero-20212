
import './style.css'
import EmptyBox from '../EmptyBox'
import { useState } from 'react'

function FillBox(prop){


    

    return(
        <div className='fill-box' style={{background:prop.color}} >

        </div>
    )
}

export default FillBox