import './App.css';
import Hello from './components/hello-world/index';
import Cuadro from './components/cuadro/index';
import './components/cuadro/style.css';
import Card from './components/card/index';
import './components/card/style.css'





function App() {

    return (
        <div className = "App">
            <Cuadro> </Cuadro> 
            <Hello> </Hello>   
            <Card></Card>
        </div>
    );
}

export default App;