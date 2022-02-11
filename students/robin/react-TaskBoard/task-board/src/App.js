import Card from './components/Card/index'
import './App.css';
import Card2 from './components/Card/card2.jsx'

function App() {
  return (
    <div className="App">

      <article>
        <Card title='Backlog'></Card>
      </article>

      <article>
        <Card2 title='In Progres'></Card2>
      </article>


    </div>
  );
}

export default App;
