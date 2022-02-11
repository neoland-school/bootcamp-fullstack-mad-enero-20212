import './style.css'

function Card(props) {
  
    return (
        <article className='card__container'>
            <img className='card__img' alt={`imagen de la pais ${props.name}`} src={props.image}></img>
            <div className={`card__body ${props.isDark ? 'card__body--dark' : '.card__body--light'}`}>
                {props.name.length > 7 ? <p>Esto es largisimo</p> : <p>Que nombre más pequeño</p>}
                <h2>{props.name}</h2>
                <hr></hr>
                <p className='card__content-ml'>Code: {props.code}</p>
                <hr></hr>
                <p className='card__content-ml'>Dial Code: {props.prefix}</p>
                <hr></hr>
                <button className='card__content-ml card__button'>Buy tickets</button>
            </div>
        </article>
    )
}

export default Card;