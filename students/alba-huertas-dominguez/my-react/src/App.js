
import './App.css';
import React, { useState } from 'react';
import Child from './components/child';
import Parent from './components/parent';
import Countries from './components/Countries';




function App() {
 
  return(
    <React.Fragment>
     {/* <Parent></Parent> */}

      <Countries></Countries>
  
  </React.Fragment>
  )
}

export default App;
