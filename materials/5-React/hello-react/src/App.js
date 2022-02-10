import logo from './logo.svg';
import './App.css';
import HelloWorld from './hello-world';

function App() {
  return (
    <div className="App">
      <h2>Hola caracola</h2>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld></HelloWorld>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
