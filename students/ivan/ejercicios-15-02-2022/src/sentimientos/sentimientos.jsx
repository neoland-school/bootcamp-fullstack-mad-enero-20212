/**
 * 3- API de sentimientos: Vamos a crear un componente que nos indique el sentimiento
 *  de una frase. Para ello debemos utilizar un API que dado un texto nos indique si
 * es positivo, negativo o neutro. El API es el siguiente
 *  http://text-processing.com/docs/sentiment.html. Para poder llamar a este API
 * necesitamos hacer un POST a la siguiente URL
 *  (http://text-processing.com/api/sentiment/). El body del post debemos
 *  pasar en el atributo text el valor del texto que queremos analizar.
 * El formato del body es  x-www-form-urlencoded. La respuesta del API
 * es un JSON con dos atributos (label que indica si el texto es pos, neg o
 * neutral y probability un objeto con la probabilidad del resultado)
 */
import React, { useState } from "react";
import "./style.css";
import axios from "axios";

function AnalizeFeelings() {
  let [feelingSentence, updateFeelingSentence] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataForm = new FormData(e.target); //accedo al formulario

    fetch("http://text-processing.com/api/sentiment/", {
      method: "POST",
      body: dataForm,
    })
      .then((r) => r.json())

      .then((c) => updateFeelingSentence(c.label));
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Analyze Sentiment</legend>
        <div>
          <label htmlFor="input-text">Enter text</label>
          <textarea id="text-area" type="textarea" name="text" />{" "}
          {/*El name text es requerido, porque lo necesita el body del objeto formData*/}
        </div>
        <button id="button" type="submit">
          Analyze
        </button>
        <p>{`El sentimiento de esta frase es: ${
          feelingSentence ? feelingSentence : ""
        }`}</p>
      </fieldset>
    </form>
  );
}

export default AnalizeFeelings;
