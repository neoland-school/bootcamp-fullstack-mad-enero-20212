import React from 'react';
import './App.css';
import CardList from './components/card-list';
import Header from './components/header';
import Card from './components/card';

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <main className='main__container'>
        <CardList></CardList>
      </main>
      <Card name="Bootcamp" code="bt" prefix="+69"></Card>
    </React.Fragment>
  );
}

export default App;
