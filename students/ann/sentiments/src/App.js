import './App.css';
import Fetch from './components/fetch';
import AnalizeFeelings from './components/feelings';


function App() {
  const api = 'http://text-processing.com/api/sentiment/'
  return (
    <div className="App">
      <h1>Hi</h1>
      <Fetch></Fetch>
    </div>
  );
}

export default App;
