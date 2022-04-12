
import './App.css';
import { useEffect } from 'react';
import Navegador from './components/navegador';
import Formulario from './components/formulario';
import Cards from './components/card'
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Listado from './pages/listado';
import Details from './components/details';


function App () {
  useEffect(()=>{
    fetch('http://localhost:4000/')
    .then(j=>j.json())
    .then(r =>console.log(r))

  },[]
  )
  return (

    <BrowserRouter>
    <Navegador></Navegador>
    <Routes>
    <Route path= '/' element= {<Listado></Listado>}></Route>
    <Route path= '/formulario' element= {<Formulario></Formulario>}></Route>
    <Route path= '/details' element= {<Details></Details>}></Route>
    <Route path= '/card' element={<Cards></Cards>}></Route>
 
  </Routes>
  </BrowserRouter>
  );
}

export default App;
