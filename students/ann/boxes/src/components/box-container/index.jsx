import './style.css'
import EmptyBox from '../empty-box';
import FilledBox from '../filled-box';
import React, { useState } from 'react';

function BoxContainer() {
    const [color, updateColor] = useState('');
    console.log(color);
    const handleSetGreen = bool => {
        if (bool === true) updateColor('green')
        else updateColor('white')
    }

    return (
        <div className="box-container">
            <EmptyBox onSetColor={handleSetGreen}></EmptyBox>
            <FilledBox style={color}></FilledBox>
        </div>
    )
}

export default BoxContainer;