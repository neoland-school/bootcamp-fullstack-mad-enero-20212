import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import UserContext from "../user-context/usercontext";
import "./style.css";

function HomeLanguage() {
  const navigate = useNavigate();
  const [, updateUserData] = useContext(UserContext);

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/userdata");
    const data = {
      language: e.target.language.value,
    };
    updateUserData(data);
    console.log(data);
  };

  return (
    <React.Fragment>
      <h1>BIENVENIDO A LA PAGINA HOME</h1>
      <h2>POR FAVOR, SELECCIONE EL IDIOMA QUE DESEE</h2>
      <form onSubmit={handleNext}>
        <label htmlFor="spanish">SPANISH</label>
        <input type="radio" name="language" value="spanish" />
        <label htmlFor="english">ENGLISH</label>
        <input type="radio" name="language" value="english" defaultChecked />
        <label htmlFor="french">FRENCH</label>
        <input type="radio" name="language" value="french" />
        <button type="submit">NEXT</button>
      </form>
    </React.Fragment>
  );
}

export default HomeLanguage;
