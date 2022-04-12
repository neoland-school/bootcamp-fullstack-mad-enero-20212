
import './App.css';
import Home from './components/home';
import { NumberProvider } from './context/context';


function App() {
  return (

    <NumberProvider>
      <Home></Home>
    </NumberProvider>
    
  );
}

export default App;
