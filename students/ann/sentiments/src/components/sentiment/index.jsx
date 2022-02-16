import React, { useState } from "react";
import './style.css'

const sentimentAPI = 'http://text-processing.com/api/sentiment/'

// fetch(sentimentAPI, {
//     method: "POST",
//     mode: "no-cors",
//     body: { text: 'great' },
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//     }
// })
//     .then(response => response.json())
//     .then(json => console.log(json));

function Sentiment() {
    const [sentiment, update] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        const data = new FormData(e.target);
        fetch(sentimentAPI, {
            method: "POST",
            mode: "no-cors",
            body: { text: 'great' },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(response => response.json())
            .then(json => update(json));
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit} className="sentiment-form">
                <label htmlFor="sentiment">Write your sentiment</label>
                <textarea required name="text" id="sentiment"></textarea>
                <button type="Submit">Analyze my text</button>
            </form>
            <p>{sentiment}</p>
        </React.Fragment>
    )
}

export default Sentiment;