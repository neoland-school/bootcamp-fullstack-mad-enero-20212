import './style.css';
import Rank from '../rank';


function Anime({animes}){

    return (
        <section className='anime__container'>
            {animes.map( (a,i) => (
                <div className='anime__item' key={i}>
                    <img src={a.image} alt={`Imagen de anime de ${a.title}`}></img>
                    <h3>{a.title}</h3>
                    <Rank rank={a.rank}></Rank>
                </div>
            ))}
        </section>
    )
}



export default Anime;