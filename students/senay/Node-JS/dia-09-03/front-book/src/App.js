import './App.css';
import React from 'react';
import BookHeader from './components/book-header';
import Home from './components/pages/home';
import Detaills from './components/pages/detaills';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <React.Fragment>

      <BookHeader></BookHeader>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='detaills/:isbn' element={<Detaills></Detaills>}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
