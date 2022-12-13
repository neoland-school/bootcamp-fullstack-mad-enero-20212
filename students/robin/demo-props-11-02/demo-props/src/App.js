
import './App.css';
import Greeting from './components/greeting/index';



function App() {
  const alumnos = ['macarena', 'robin', 'alex', 'sergio', 'hector', 'alba', 'jorge', 'ivan', 'cristina', 'eugenio', 'jose','koroba','senay'] 

  return (
    <div className="App">
      <Greeting saludar='Alex'></Greeting>
      <Greeting saludar='Robin'></Greeting>
      <Greeting saludar='Jose'></Greeting>
      <Greeting saludar='Jorge'></Greeting>
      <Greeting saludar='Ivan'></Greeting>

      
      {alumnos.map(a => <Greeting saludar={a} extend={true}></Greeting>) }


    </div>
  );
}

export default App;
