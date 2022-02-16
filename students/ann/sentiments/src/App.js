import './App.css';
import Sentiment from './components/sentiment';


function App() {
  const api = 'http://text-processing.com/api/sentiment/'
  return (
    <div className="App">
      <h1>Sentiment Analysis</h1>
      <Sentiment></Sentiment>
    </div>
  );
}

export default App;
