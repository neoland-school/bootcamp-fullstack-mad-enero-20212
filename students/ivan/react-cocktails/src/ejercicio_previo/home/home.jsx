import React, { useContext } from "react";
import NumberContext from "../context/context.provider";
import Hijo from "../hijo/hijo";

function Home() {
  const [value] = useContext(NumberContext);
  return (
    <React.Fragment>
      <p>{value}</p>
      <Hijo></Hijo>
    </React.Fragment>
  );
}

export default Home;
