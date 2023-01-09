/**
2 Crea tu primer  componente react  llamado Helloword, utilizando JSX que devuelva un H1 que tenga como texto 
`hola mundo`.
3 Agregale al  componente Helloword dos parrafos con lorem y visualizado en pantalla.
4 Crear un componente reactJS llamado Cuadro con un div de 100px por 100px con el fondo rojo. 
        Crear otro componente llamado Text que tenga un p con el texto `soy un componente hijo`. 
        Meter este componente como hijo del anterior y visualizo en pantalla.
5. Crea un  componente Card como en la siguiente imagen, la imagen debe ser parte de tus archivos del 
proyecto react, y el boton sera otro componente llamado Boton.

import logo from './logo.svg';
import './App.css';
import Hello from './components/hello-world/index';
import Cuadro from './components/cuadro/index';
import './components/cuadro/style.css';



function App() {
    return ( 
        <
        div className = "App" >
        <
        Cuadro > < /Cuadro> <
        Hello > < /Hello>  
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p >
        Edit < code > src / App.js < /code> and save to reload. < /
        p > <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React <
        /a> < /
        header > 
        <
        /div>
    );
}

export default App;



 */

function Hello() {
    return (
        <div>
            <h1>Hello World</h1>
            <p>Lorem Ipsum bla bla bla y bla</p>
            <p>Lorem Ipsum bla bla bla</p>
        </div>
    
    )
    
    
}
export default Hello;