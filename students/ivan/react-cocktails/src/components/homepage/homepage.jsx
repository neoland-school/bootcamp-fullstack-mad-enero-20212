import React, { useContext } from "react";
import Header from "../header/header";
import "./style.css";
import AuthContext from "../contexto/contexto";

function HomePage() {
  const [auth, updateValue] = useContext(AuthContext);

  const handleEntry = () => {
    updateValue(true);
  };
  console.log(auth);

  return (
    <React.Fragment>
      <Header></Header>
      <div>
        <button onClick={handleEntry}>SOY MAYOR DE 18 AÑOS</button>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
