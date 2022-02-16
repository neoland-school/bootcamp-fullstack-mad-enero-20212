import React from 'react';
import './App.css';
import Greeting from './components/greeting';
import Anime from './components/anime';
import { animes, persons, contacts } from './data';
import LifeCycleExample from './components/lifecycle-example';
import FormsExample from './components/forms-example';
import PropsParent from './components/props-parent';
import AvatarList from './components/avatar-list';
import FetchExample from './components/fetch-example';
import Sentiment from './components/sentiments';

function App() {
  
  return (
    <React.Fragment>
      {/* {persons.map((p, i) => <Greeting key={i} name={p} extended={p.length < 6}></Greeting>)} */}
      {/* <h1>Top Anime</h1>
      <Anime animes={animes}></Anime> */}
      {/* <LifeCycleExample></LifeCycleExample> */}
      {/* <FormsExample></FormsExample> */}
      {/* <PropsParent></PropsParent> */}
      {/* <AvatarList avatars={contacts}></AvatarList> */}
      {/* <FetchExample></FetchExample> */}
      <Sentiment></Sentiment>
    </React.Fragment>
  );
}

export default App;
