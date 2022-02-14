import React from 'react';
import './App.css';
import Greeting from './components/greeting';
import Anime from './components/anime';
import { animes, persons } from './data';

function App() {
  
  return (
    <React.Fragment>
      {/* {persons.map((p, i) => <Greeting key={i} name={p} extended={p.length < 6}></Greeting>)} */}
      <h1>Top Anime</h1>
      <Anime animes={animes}></Anime>
    </React.Fragment>
  );
}

export default App;
