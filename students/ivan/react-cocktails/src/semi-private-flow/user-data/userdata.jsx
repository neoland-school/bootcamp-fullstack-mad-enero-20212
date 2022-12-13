import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../user-context/usercontext";

function UserData() {
  const navigate = useNavigate();
  const [dataUser, updateUserData] = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.date.value.split("-")[0]);
    // console.log(e.target.date.value.substring(0, 4));
    localStorage.setItem("bornYear", e.target.date.value.split("-")[0]);
    const data = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      date: e.target.date.value,
    };
    updateUserData(Object.assign(data));
    console.log(dataUser);
    //navigate("/userform");
  };
  return (
    <React.Fragment>
      <h1>BIENVENIDO A LA PAGINA DE INICIO</h1>
      <h2>POR FAVOR RELLENE SUS DATOS PARA ACCEDER</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Ingrese su nombre</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="surmane">Ingrese su apellido</label>
        <input type="text" name="surname" id="surname" />
        <label htmlFor="date">Ingrese su fecha de nacimiento</label>
        <input type="date" name="date" id="date" />
        <button type="submit">NEXT</button>
      </form>
    </React.Fragment>
  );
}

export default UserData;
