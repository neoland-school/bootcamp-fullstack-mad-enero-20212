import logo from './logo.svg';
import './App.css';
import './componentes/cuadro/style.css'
import Cuadrado from './componentes/cuadro';
import Card from './componentes/card';
import './componentes/card/style.css';
import './componentes/button/style.css';
import './componentes/card-paises/style.css';
import CardCountry from './componentes/card-paises';
import './componentes/boton-verde/style.css';
import NavPaises from './componentes/nav-paises';
import './componentes/nav-paises/style.css';

import NavPortafolio from './componentes/portafolio-nav';
import './componentes/portafolio-nav/style.css';

import BodyPortafolio from './componentes/portafolio-body';
import './componentes/portafolio-body/style.css';

import HelloWorld from './componentes/helloworld';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorld></HelloWorld>
        <Cuadrado></Cuadrado>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <NavPaises></NavPaises> Esta es la web de las cards de paises */}
      <NavPortafolio></NavPortafolio>
      <main>
        {/* <Card></Card>  Esta es la card de las cervezas */}
      {/* <CardCountry></CardCountry> Esta es la web de las cards de paises */}
      <BodyPortafolio></BodyPortafolio>

      </main>
    </div>
  );
}

export default App;
