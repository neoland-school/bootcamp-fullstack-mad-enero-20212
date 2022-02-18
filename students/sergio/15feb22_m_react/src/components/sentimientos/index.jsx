import { useState } from 'react';
import '../sentimientos/style.css'


   
    

function Sentimientos(){

    
     
    let [valueTextArea, uploadValueTextArea] = useState('');
   

    const textAreaValue = e => {
        e.preventDefault();
        uploadValueTextArea(e.target.value)
       
    }

    const ExtraerValor = e => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            body: valueTextArea,
        };
        fetch('http://text-processing.com/api/sentiment/', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return (

    <form className="container_form">
        <h5 class='title_outside'>Analyze Sentiment</h5>
        <div className="container_input">
            <p className='title'>Enter text</p>
            <textarea className='input_text' onChange={textAreaValue}></textarea>
        </div>
        <button type="submit" className='bottom' onClick={ExtraerValor}>Analyze</button>
    </form>
    
    
    
    )
}

export default Sentimientos;