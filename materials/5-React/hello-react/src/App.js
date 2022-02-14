import React from 'react';
import './App.css';
import Greeting from './components/greeting';
import Anime from './components/anime';
import { animes, persons } from './data';
import LifeCycleExample from './components/lifecycle-example';
import FormsExample from './components/forms-example';
import PropsParent from './components/props-parent';

function App() {
  
  return (
    <React.Fragment>
      {/* {persons.map((p, i) => <Greeting key={i} name={p} extended={p.length < 6}></Greeting>)} */}
      {/* <h1>Top Anime</h1>
      <Anime animes={animes}></Anime> */}
      {/* <LifeCycleExample></LifeCycleExample> */}
      {/* <FormsExample></FormsExample> */}
      <PropsParent></PropsParent>
    </React.Fragment>
  );
}

export default App;
