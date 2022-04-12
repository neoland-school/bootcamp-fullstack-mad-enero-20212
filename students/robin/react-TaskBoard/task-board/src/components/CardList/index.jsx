
import './style.css'

function CardList(prop){
    return(
        <article className='list-container'>
        <div className="card-list">
            <div className={prop.description.length > 20 ? 'length-green' : 'length-orange' }></div>
            <p>{prop.description}</p>
        </div>
       
       
        <div className="card-list">
            < div className={prop.description1.length > 20 ? 'length-green' : 'length-orange' }></div>
            <p>{prop.description1}</p>
        </div>
       
        <div className="card-list">
            <div className={prop.description2.length > 20 ? 'length-green' : 'length-orange' }></div>
            <p>{prop.description2}</p>
        </div>

        <div className="card-list">
            <div className={prop.description3.length > 20 ? 'length-green' : 'length-orange' }></div>
            <p>{prop.description3}</p>
        </div>
       
       
        <div className="card-list">
            <div className={prop.description4.length > 20 ? 'length-green' : 'length-orange' }></div>
            <p>{prop.description4}</p>
        </div>
       
        <div className="card-list">
            <div className={prop.description5.length > 20 ? 'length-green' : 'length-orange' }></div>
            <p>{prop.description5}</p>
        </div>

       
       
       </article>
    )
}
export default CardList
