import './style.css'
import EmptyBox from '../empty-box';
import FilledBox from '../filled-box';
import React, { useState } from 'react';

function BoxContainer() {
    const [color, updateColor] = useState('');
    
    const handleSetGreen = bool => bool ? updateColor('green') : updateColor('white')

    return (
        <div className="box-container">
            <EmptyBox onSetColor={handleSetGreen}></EmptyBox>
            <FilledBox style={color}></FilledBox>
        </div>
    )
}

export default BoxContainer;