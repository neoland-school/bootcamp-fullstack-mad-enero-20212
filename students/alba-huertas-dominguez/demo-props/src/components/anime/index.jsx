import react from 'react';
import './stylesheet.css'

function Anime(props){
    return (
        <react.Fragment>
    <div className='container'>
    <img className="imagen" src={props.img}></img>
    <h3>{props.titulo}</h3>
    <p>{props.ranking}</p>
    </div>
    </react.Fragment>
    


    )

}

export default Anime