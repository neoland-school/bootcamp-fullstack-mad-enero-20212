
import './App.css';
// import Buttons from './components/ej-1';
import Avatar from './components/ej4';



let contacts = [
  {
    img: `https://randomuser.me/api/portraits/men/1.jpg`,
    name: "pepe"
  },
  {
    img: `https://randomuser.me/api/portraits/women/2.jpg`,
    name: "carla"
  },
  {
    img: `https://randomuser.me/api/portraits/men/3.jpg`,
    name: "andres"
  },
  {
    img: `https://randomuser.me/api/portraits/women/4.jpg`,
    name: "andrea"
  },
  {
    img: `https://randomuser.me/api/portraits/men/5.jpg`,
    name: "victor"
  },
  {
    img: `https://randomuser.me/api/portraits/men/6.jpg`,
    name: "jose"
  },


];

function App() {
  return (
    <>
    {/* <Buttons></Buttons> */}
    
    <header className="header">
      <h3 className="headerText">CONTACTOS</h3>
    </header>
    <input></input>
    {  contacts.map((e,i)=> <Avatar key={i} img={e.img} name={e.name}></Avatar>)
    }
    </>
      
  );
}

export default App;
