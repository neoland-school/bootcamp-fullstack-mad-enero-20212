import React from "react";
import ApiCaller from "./APICaller/apiCaller";
import "./App.css";
import BoxContainer from "./boxContainer/boxContainer";
import CounterContainer from "./CounterContainer/counterContainer";

function App() {
  return (
    <React.Fragment>
      <BoxContainer></BoxContainer>
      <CounterContainer></CounterContainer>
      <ApiCaller></ApiCaller>
    </React.Fragment>
  );
}

export default App;
