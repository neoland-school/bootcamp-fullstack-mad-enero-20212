import react from 'react';
import './stylesheet.css'

function Anime(prons){
    return (
        <react.Fragment>
    <div className='container'>
    <img className="imagen" src={prons.img}></img>
    <h3>{prons.titulo}</h3>
    <p>{prons.ranking}</p>
    </div>
    </react.Fragment>
    


    )

}

export default Anime