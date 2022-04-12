import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomeB from './homeb';
import CocProvider from './components/context/datacontext';
import Zumos from './components/zumos/index';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Coctails from './components/coctails';
import { ThemeProvider } from 'react-bootstrap';
import { useContext } from 'react';
import { DataContext } from './components/context/crecontext';











function App() {

  

  return (

 
    <BrowserRouter>

<div className='div-primary'  >hola</div>
    <Routes>
    <Route path='/' element={<HomeB></HomeB>}></Route>
    <Route path='/bebidas' elemen={<Coctails></Coctails>}></Route>
    
     <Route path='/zumos'element={ <Zumos></Zumos>}></Route>
   
    

      

      </Routes>
 
   

   </BrowserRouter>

  );
}

export default App;
