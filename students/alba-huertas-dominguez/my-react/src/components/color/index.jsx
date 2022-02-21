import react from 'react';
import React, { useState } from 'react';

function Color() {

    let [changeColor, updateColor] = useState('black');
    const handlesubmit = e => {
        updateColor('green');



    }


    return (
        <React.Fragment>
           
                <button onClick={handlesubmit}>Cambia a verde</button>

           
            <p>la parte final del <span style={{ color: changeColor }}>texto debe cambiar</span></p>

        </React.Fragment>
    )

}

export default Color;