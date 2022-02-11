import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/helloworld/helloworld';
import NewDiv from './components/cuadro/cuadro';
import NeewP from './components/cuadro/text/text';
import NewCards from './components/cards/cards'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <HelloWorld></HelloWorld>
        <NewDiv></NewDiv>
        <NeewP></NeewP>
        <NewCards></NewCards>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
