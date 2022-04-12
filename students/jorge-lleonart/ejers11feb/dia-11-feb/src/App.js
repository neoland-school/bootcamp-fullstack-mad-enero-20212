import './App.css';
import Gretting from './components/greeting';

function App() {
  let arrPupils =[
    { "name" : "MacaPaca",
      "extend" : true
    },
    { "name" : "Pepita",
      "extend" : false
    },
    { "name" : "Esperanza",
      "extend" : true
    }];

  return (
    <>
      {arrPupils.map(c => <Gretting extend={c.extend} name={c.name}></Gretting>)} 
      {/* {arrPupils.map(c => <Gretting extend={c.name.length>6} name={c.name}></Gretting>)}  */}
    </>
  );
}

export default App;
