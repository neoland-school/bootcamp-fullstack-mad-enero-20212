import React from "react";
import './index.css';
import BoxContainer from "./components/box-container";
import CounterContainer from "./components/counter-container";

function App() {
  return (
    <div className="App">
      <BoxContainer></BoxContainer>
      <CounterContainer></CounterContainer>
    </div>
  );
}

export default App;
