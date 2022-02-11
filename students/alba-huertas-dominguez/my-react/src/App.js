import cervezas from './assets/img/cervezas.jpg'
import './App.css';
import HelloWorld from './components/first-component/index.jsx';
import Lorem from './components/second-component';
import Cuadro from './components/cuadro';
import Text from './components/hijo-cuadro';
import './components/cuadro/style.css';
import './components/titulo/style.css';
import './components/boton/style.css';
import CardTitle  from './components/titulo';
import Boton from './components/boton';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cervezas} className="beerimg" alt="logo" />
        <CardTitle></CardTitle>
        <Boton></Boton>
        
      </header>
    </div>
  );
}

export default App;
