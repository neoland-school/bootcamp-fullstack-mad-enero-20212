import logo from './logo.svg';
import './App.css';
import Multiplier from './pages/multiplier';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Region from './pages/region';
import UserInfo from './pages/userinfo';
import Numbers from './pages/numbers';
import Login from './pages/login';
import Confirmacion from './pages/confirmacion';
import { UserProvider } from './context/context';
import PrivateRoute from './routes';
import ProtectedRoute from './routes/protectedroute';


function App() {

  return (
    <BrowserRouter>

<UserProvider>
<Routes>
<Route path= '/' element={<Region></Region>}> </Route>
<Route path= '/userinfo' element={<UserInfo></UserInfo>}> </Route>


<Route path= '/numbers' element={
  <PrivateRoute>
<Numbers></Numbers>
</PrivateRoute>
}> </Route>



<Route path= '/login' element={<Login></Login>}> </Route>

<Route path= '/multiplier' element={
  <ProtectedRoute>
<Multiplier></Multiplier>
</ProtectedRoute>

}> </Route>



<Route path= '/confirmacion' element={<Confirmacion></Confirmacion>}> </Route>
</Routes>
</UserProvider>
</BrowserRouter>
  );
}

export default App;
