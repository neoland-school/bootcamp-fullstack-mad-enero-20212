import '../Country/style.css';

function CardPaises(prop){
    console.log(prop)
     return (
        <div className="container_card">
            <img src={prop.prop.img} alt="" className='imgen1' />
            <div className="container_text">
                <div className="name">{prop.prop.name_es}</div>
                <div className="code">Code: {prop.prop.code}</div>
                <div className="dial">Dial Code: {prop.prop.dial_code}</div>
                <nav className="container_button">
                    <button className="button">Buy Tickets</button>
                </nav>
            </div>
        </div>

    )
}

export default CardPaises;