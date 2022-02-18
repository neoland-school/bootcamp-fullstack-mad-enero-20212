import './style1.css';

function CardPaises(){
    
    return (

        <div className="container_card">
            <img src='https://againstthecompass.com/wp-content/uploads/2021/08/DSC_6696-1024x684.jpg' alt="" className='imgen1' />
            <div className="container_text">
                <div className="name">Afganistan</div>
                <div className="code">Code: AF</div>
                <div className="dial">Dial Code: +93</div>
                <nav className="container_button">
                    <button className="button">Buy Tickets</button>
                </nav>
            </div>
        </div>

    )
}
export default CardPaises;