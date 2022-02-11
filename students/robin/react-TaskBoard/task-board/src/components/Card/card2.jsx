
import CardList2 from '../CardList/card2list.jsx'

function Card2(props){
    return(
        <div className='card'>
            <header className='card-header'>
                <h1 className='title-card'>{props.title}</h1>
                <p>...</p>
            </header>

            <CardList2 description='Gestión de facturas de la luz' description1='Levantar tarjetas trello hispaled' description2='Generar Mock Server'></CardList2>
           


            <footer className='card-footer'>
                <div>
                    <p><i class="fas fa-plus"></i> Añada una tarjeta</p>
                </div>

                <i class="fas fa-credit-card"></i>
            </footer>
        </div>
    )
}

export default Card2