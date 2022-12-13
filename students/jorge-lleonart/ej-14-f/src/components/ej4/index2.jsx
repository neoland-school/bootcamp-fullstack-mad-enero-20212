import Contacts from './index'


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

function Filter() {
    let [userImput,updateUserImput] = useState('Texto inicial')
    let handleInput = e => updateUserImput(e.target.value);

    return (
      <>
        <header className="header"><h1 className="header__text">Contacts</h1></header>
        <input type="text" onChange={handleInput}/>
        {contacts.map((c,i) => <Contacts key={i} img={c.img} name={c.name}></Contacts>)
        
        
        }
      </>
      
    );
}

export default Filter;