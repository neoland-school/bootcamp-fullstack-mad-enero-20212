import logo from './logo.svg';
import './App.css';
import PrintH1 from './Components/greeting';
import React from 'react';

function App() {
  const profesoresAlumnos = ['Jose', 'Alex', 'Jose', 'Hector', 'Maca', 'Alba', 'Jorge', 'Ivan', 'Cristina', 'Koroba', 'Robin', 'Senay', 'Eugenio', 'Andrea', 'Sergio']



  return (

    <React.Fragment>

      <div>

        {
          profesoresAlumnos.map((c, i) => <PrintH1 key={i} name={c} extended={c.length < 6}></PrintH1>)
        }

      </div>
      <PrintH1 name="Alex"></PrintH1>
      <PrintH1 name="Jose" extended={true}></PrintH1>
    </React.Fragment>

  );
}

export default App;
