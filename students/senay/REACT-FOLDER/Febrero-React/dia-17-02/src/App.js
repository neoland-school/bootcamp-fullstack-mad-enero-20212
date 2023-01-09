import React from 'react';
import './App.css';
// import Prueba from './components/prueba';
// import Counter from './components/prueba/conter';
import MethodsContainer from './components/methods-container';

function App() {
const title = 'Welcome to the new blog';


  return (
    <React.Fragment>
      {/* <div className="content"><h1>{title}</h1></div> */}
      {/* <Prueba></Prueba> */}
      {/* <Counter></Counter> */}
      <MethodsContainer></MethodsContainer>
    </React.Fragment>

  );
}

export default App;
