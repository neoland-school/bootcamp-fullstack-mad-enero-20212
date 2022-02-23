import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  const handleLogIn = (e) => {
    e.preventDefault();
    if (e.target.email.value != null) {
      localStorage.setItem("email", e.target.email.value);
      navigate(`/multiplier${location.search}`);
    }
  };
  return (
    <React.Fragment>
      <h1>HOLA, ANTES DE CONTINUAR, NECESITAMOS REGISTRAR TU EMAIL</h1>
      <h2>
        INTRODUCE TU EMAIL PARA ACCEDER A TODAS LA FUNCIONALIDADES DE LA WEB
      </h2>
      <form onSubmit={handleLogIn}>
        <input type="email" name="email" id="email" required />
        <button type="submit">Log In</button>
      </form>
    </React.Fragment>
  );
}

export default Login;
