import React from 'react';
import EmptyBox from '../EmptyBox';
import FillBox from '../FillBox'
import { useState } from 'react'



function BoxContainer(){

    const [color,updateColor] = useState('');

    function handleGreen(e){
        if(e === true){
            updateColor('red')
            
        }else if (e === false){
            updateColor('green')
        }
    }  
    return(
        <React.Fragment>
            <EmptyBox setColor={handleGreen}  ></EmptyBox>
            <FillBox color={color} ></FillBox>
        </React.Fragment>
    )
}

export default BoxContainer