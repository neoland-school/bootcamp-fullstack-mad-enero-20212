import React from "react";
const api = 'http://text-processing.com/api/sentiment/'

fetch('http://text-processing.com/api/sentiment/', {
    method: "POST",
    credentials: "same-origin",
    body: JSON.stringify({text: "true"}),
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
})
.then(response => response.json())
.then(json => console.log(json));

function Fetch() {
 
    // async function getFetch() {
    //     const response = await fetch(api, [
    //         {method: 'POST',
    //         body: {
    //             text: "great"
    //         },
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8"
    //         }}
    //     ])
    //     console.log(response)
    // }
    
    

    
    
    return(
        <p>hi</p>
    )
}

export default Fetch;