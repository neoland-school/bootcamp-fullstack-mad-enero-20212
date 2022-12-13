
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Cocktails from './pages/cocktails';
import Info from './pages/info';
import Drinks from './pages/drinks';
import Details from './pages/details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        {/* <Route path='cocktails' element={<PrivateRoute><Cocktails/></PrivateRoute>}></Route> */}
        <Route path='info' element={<Info/>}></Route>
        {/* <Route  path='drinks' element={<PrivateRoute><Drinks/></PrivateRoute>}></Route> */}
        <Route path='details' element={<Details/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
