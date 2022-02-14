import Rank from "../Rank";
import '../Anime/style.css'

function Anime(prop){
    
    
    return  <div>
        <img src={prop.anime.image} alt="Imagen anime" className="img_anime"></img>
        <h4 className="name_anime">{prop.anime.title}</h4>
        <Rank rank={prop.anime}></Rank>
    </div>
}

export default Anime;
