import logo from './logo.svg';
import React from 'react';
import './App.css';
import Sentiment from './components/sentiment';
import EmptyBox from './components/empty-box';
import FillBox from './components/fill-box';
import BoxContainer from './components/box-container';
import CounterInterval from './components/counter-interval';

function App() {
  return (
    // <Sentiment></Sentiment>
    // <BoxContainer></BoxContainer>
    <React.Fragment>
    
      <CounterInterval></CounterInterval>

    </React.Fragment>
  );
}

export default App;
