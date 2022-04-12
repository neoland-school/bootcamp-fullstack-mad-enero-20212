import React from "react";
import { useNavigate,useSearchParams } from "react-router-dom"
function Login () {
  let navigate = useNavigate()
  const [searchParams] = useSearchParams();
  
  const op1 = searchParams.get("op1") ?? 0; // con las dos interrogaciones estoy diciendo que si no existe el op1 lo inicialice a cero.

  const op2 = searchParams.get("op2") ?? 0;
  const handler = e => {
  
  localStorage.setItem('email',e.target.email.value)
  navigate(`/multiplier?op1=${op1}&op2=${op2}`)}
    return (
    <React.Fragment>
      <form onSubmit={handler}>
      <label  htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="email" name="email"/>
                <button type="submit">Login</button>
                </form>

    </React.Fragment>)


  }
  
  export default Login;