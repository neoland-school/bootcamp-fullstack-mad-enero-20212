import ImgBirra from '../../assets/images/mad-tree.jpg'
import '../cuadro/style.css' 

function Card() {

    return (
        <div className="container__birra">
            <div className='header'>
                <img src = {ImgBirra} className="Logo" alt="Imagen Logotipo"/>
            </div>

            <div className="Main">
                <h4>MadTree Brewing</h4>
                <p>Type: regional</p>
                <p>City: Cincinnati</p>
                <p>State: Ohio</p>
                <p>Country: Unites States</p>
                <div className="container__btn">
                    <buton className = "btn" href ="https://google.es" target = "_blank">Visit the Website</buton>
                </div>
            </div>
        </div>
    )
}
export default Card;
