/**
 * 3- Gestión de API. Vamos a crear un componente para poder llamar a
 * diferentes API's. El componente debe tener una botonera para poder
 * realizar diferentes peticiones HTTP. Además tendrá un pre para pintar
 * la respuesta y un p para pintar el codigo HTTP de respuesta.
 * (Tenéis ejemplo en la imagen).
 *
 * POST: Cuando se pulse el botón de Post Ok se deberá realizar una llamada
 * POST a la siguiente url (https://bootcamp.free.beeceptor.com/hello-ok) y
 * se deberá pintar la respuesta en el HTML. Si la respuesta es vacía, se
 * debe poner Empty Response en el pre . Se tiene que pintar también el
 * código de respuesta HTTP recibido
 */
import { useState } from "react";
import "./style.css";

function ApiCaller() {
  let [preValue, updatePreValue] = useState("");
  let [value, updateValue] = useState();
  const handlePostOk = (e) => {
    e.preventDefault();
    fetch("https://bootcamp.free.beeceptor.com/hello-ok", {
      method: "POST",
    })
      .then((r) => {
        r.json();
        console.log(r);
        updatePreValue(r);
      })
      .then((c) => updateValue(c));
  };

  const handlePutOk = (e) => {
    e.preventDefault();
    fetch("https://bootcamp.free.beeceptor.com/hello-ok", {
      method: "PUT",
    })
      .then((r) => {
        r.json();
        console.log(r);
        updatePreValue(r);
      })
      .then((c) => updateValue(c));
  };
  const handleDeleteOk = (e) => {
    e.preventDefault();
    fetch("https://bootcamp.free.beeceptor.com/hello-ok", {
      method: "DELETE",
    })
      .then((r) => {
        r.json();
        console.log(r);
        updatePreValue(r);
      })
      .then((c) => updateValue(c));
  };

  const handlePostKo = (e) => {
    e.preventDefault();
    fetch("https://bootcamp.free.beeceptor.com/hello-ok", {
      method: "DELETE",
    })
      .then((r) => {
        r.json();
        console.log(r);
        updatePreValue(r);
      })
      .then((c) => updateValue(c));
  };

  return (
    <div>
      <div className="button_container">
        <button onClick={handlePostOk}>POST ok</button>
        <button onClick={handlePutOk}>PUT ok</button>
        <button onClick={handleDeleteOk}>DELETE ok</button>
        <button onClick={handlePostKo}>POST ko</button>
      </div>
      <div>
        <h4>{preValue.statusText ? preValue.statusText : "Empty"}</h4>
        <h3>Status code: {preValue.status} </h3>
      </div>
    </div>
  );
}

export default ApiCaller;
