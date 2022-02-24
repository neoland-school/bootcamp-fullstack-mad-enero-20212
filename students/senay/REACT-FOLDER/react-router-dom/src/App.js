import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './pages/ejercicios-components/footer-ej/footer';
import Header from './pages/ejercicios-components/header-ej';
import HelloPage from './pages/ejercicios-components/hello-page-ej/hello-page';


function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <main className="main">
        <Routes>
          <Route path='/hello' element={<HelloPage></HelloPage>}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>























    // <BrowserRouter>
    //   <Header></Header>
    //   <main>
    //     <Routes>
    //       <Route path='/hello' element={<HelloPge></HelloPge>}></Route>
    //       <Route path='/countries' element={<CountriesList></CountriesList>}></Route>
    //       <Route path='/countries/:code' element={<CountryDetail></CountryDetail>}></Route>
    //     </Routes>
    //   </main>
    //   <p>Esto es despues de las paginas</p>
    // </BrowserRouter>

  );
}

export default App;
