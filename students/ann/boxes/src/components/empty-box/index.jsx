import './style.css'
import React from 'react';

function EmptyBox({ onSetColor }) {

    return (
        <div onMouseOver={() => onSetColor(true)} onMouseLeave={() => onSetColor(false)} className="empty-box"></div>
    )
}

export default EmptyBox;