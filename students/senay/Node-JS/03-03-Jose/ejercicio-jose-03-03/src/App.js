import './App.css';
import { useEffect } from 'react';

function App() {



  useEffect(() => {
    fetch('http://localhost:4000/')
      .then(r => r.json())
      .then(d => console.log(d))

  }, []);

  return (
    <div className="app-container">
      <h2>Holaa</h2>
    </div>
  );
}

export default App;
