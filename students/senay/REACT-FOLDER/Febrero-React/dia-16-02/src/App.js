// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Sentiment from './components/sentiment';
// import EmptyBox from './components/empty-box';
// import FillBox from './components/fill-box';
// import BoxContainer from './components/box-container';
// import CounterInterval from './components/counter-interval';
// import Post from './components/methods-post-put/post';
import CounterIntervalTwo from './components/counter-interval';
import FielingsApi from './components/fielings-api';
import IntervalTwoContainer from './components/counter-interval-two-container';

function App() {
  return (
    // <Sentiment></Sentiment>
    // <BoxContainer></BoxContainer>
    // <Post></Post> 
    // <CounterInterval></CounterInterval>
    <React.Fragment>
      {/* <CounterIntervalTwo></CounterIntervalTwo> */}
      {/* <FielingsApi></FielingsApi> */}
      <IntervalTwoContainer></IntervalTwoContainer>
    </React.Fragment>

  );
}

export default App;
