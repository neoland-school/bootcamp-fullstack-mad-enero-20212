


import './style.css'

function CardList2(prop){
    return(
        <article className='list-container'>
        <div className="card-list">
            <div className={prop.description.length > 20 ? 'length-green' : 'length-orange' }></div>
            <p>{prop.description}</p>
        </div>
       
       
        <div className="card-list">
            <div className={prop.description1.length > 20 ? 'length-green' : 'length-orange' }></div>
            <p>{prop.description1}</p>
        </div>
       
        <div className="card-list">
            <div className={prop.description2.length > 20 ? 'length-green' : 'length-orange' }></div>
            <p>{prop.description2}</p>
        </div>
       
       </article>
    )
}
export default CardList2
