import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './pages/header';
import PokeList from './pages/pokelist/pokelist';
import Contact from './pages/contact/index'
import NotFound from './pages/notfound/inde';
import Detail from './pages/details';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='detail' element={<Detail/>}></Route>
        <Route path='home' element={<PokeList></PokeList>}    ></Route>
        <Route path= '/*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
    


  );
}

export default App;