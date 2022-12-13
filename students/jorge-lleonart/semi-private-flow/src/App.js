import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Region from './pages/region';
import Confirmacion from './pages/confirmacion';
import Login from './pages/login';
import Multi from './pages/multiplayer';
import UserInfo from './pages/user-info';
import Numbers from './pages/numbers';
import {CurrencyProvider} from './context/context';
import ProtectedRoute from './components/protected-route';
import './App.css';
import ProtectedEmail from './components/protected-route/protect-email';

function App() {
  return (

    <BrowserRouter>
      <CurrencyProvider>
        <Routes>
          <Route path="/" element={<Region />}></Route>
          <Route path="confirmacion" element={<Confirmacion />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="multi" element={
            <ProtectedEmail>
              <Multi />
            </ProtectedEmail>
          }></Route>
          <Route path="numbers" element={
            <ProtectedRoute>
              <Numbers />
            </ProtectedRoute>
          }></Route>
          <Route path="user-info" element={<UserInfo />}></Route>
        </Routes>
      </CurrencyProvider>
    </BrowserRouter>
  );
}

export default App;
