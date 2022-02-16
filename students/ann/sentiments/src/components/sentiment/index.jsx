import React, { useState } from 'react';
import './style.css';

const sentimentAPI = 'http://text-processing.com/api/sentiment/';

function Sentiment() {
    const [sentiment, update] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        fetch(sentimentAPI, {
            method: 'POST',
            body: data,
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.label === 'pos') {
                    update(`"positive" with a probabilty of ${json.probability.pos.toFixed(2)}`);
                }
                if (json.label === 'neg') {
                    update(`"negative" with a probabilty of ${json.probability.neg.toFixed(2)}`);
                }
                if (json.label === 'neutral') {
                    update(`"neutral" with a probabilty of ${json.probability.neutral.toFixed(2)}`);
                }
            });
    };

    return (
        <React.Fragment>
            <div className="sentiment__form-container">
                <form onSubmit={handleSubmit} className="sentiment-form">
                    <label htmlFor="sentiment">Write your sentiment in English</label>
                    <p className="max__text__sentiment">
                        (message can't exceeds 80,000 characters)
                    </p>
                    <textarea required name="text" id="sentiment"></textarea>
                    <button id="submit-button" type="Submit">
                        Analyze my message
                    </button>
                </form>
                <div className="sentiment-response-container">
                    <p className="sentiment-response">Sentiment analysis response:</p>
                    <p className="sentiment-response api-response">{sentiment}</p>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Sentiment;
