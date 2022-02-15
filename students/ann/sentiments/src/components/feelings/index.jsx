import React, { useState } from "react";
 
 function AnalizeFeelings() {
   let [data, updateText] = useState({
     text: "",
     language: "english",
   });
   let [feelingSentence, updateFeelingSentence] = useState();
   console.log(data);
   const handleSubmit = (e) => {
     e.preventDefault();
     console.log(data.text);
     updateText((data) => {
       data.text = e.target.input_text.value;
     });
     console.log(data);
     fetch("http://text-processing.com/api/sentiment/", {
       method: "POST",
       mode: "no-cors",
       cache: "no-cache",
       credentials: "same-origin",
       body: data,
       headers: {
         "Content-Type": "application/x-www-form-urlencoded",
       },
     })
       .then((r) => {
         r.text();
         console.log(r);
       })
       .then((c) => {
         updateFeelingSentence(c);
         console.log(c);
       });
     console.log(e.target.input_text.value);
   };
   return (
     <form id="form" onSubmit={handleSubmit}>
       <h3>Analyze Sentiment</h3>
       <div>
         <label htmlFor="input-text">Enter text</label>
         <textarea id="text-area" type="textarea" name="input_text" />
       </div>
       <button id="button" type="submit">
         Analyze
       </button>
       <p>{`El sentimiento de esta frase es: ${
         feelingSentence ? feelingSentence : ""
       }`}</p>
     </form>
   );
 }
 export default AnalizeFeelings;