import './country.css'
function Countries (props){

    return (
        <article className='card__container'>
            {
                props.name_en.length>7?  
                
                <>
                <img className='card__img' alt={`imagen de la pais ${props.name}`} src={props.img}></img>
                <div className={`card__body ${props.isDark ? 'card__body--dark' : '.card__body--light'}`}>
                    <h2>{props.name_en}</h2>
                    <hr></hr>
                    <p className='card__content-ml'>Code: {props.code}</p>
                    <hr></hr>
                    <p className='card__content-ml'>Dial Code: {props.dial_code}</p>
                    <hr></hr>
                    <button className='card__content-ml card__button'>Buy tickets</button>
                </div>
                </>  : ''

            }
         
           
        </article>
    )
    
}
export default Countries;
