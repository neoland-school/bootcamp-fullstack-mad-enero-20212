
import './App.css';
import React, { useState } from 'react';
import Child from './components/child';
import Parent from './components/parent';
import Countries from './components/countries';
import Sentiment from './components/sentimientos';
import BoxContainer from './components/boxcontainer';
import CounterInterval from './components/counterinterval';
import CounterContainer from './components/countercontainer'




function App() {
 
  return(
    <React.Fragment>
     {/* <Parent></Parent> */}

    {/* <Sentiment></Sentiment> */}
  
{/* <BoxContainer></BoxContainer> */}
{/* <CounterInterval></CounterInterval> */}
{/* <CounterContainer></CounterContainer> */}
<Filter></Filter>
  </React.Fragment>
  )
}

export default App;
