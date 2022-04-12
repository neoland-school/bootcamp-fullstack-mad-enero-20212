// 4. Crea un componente React llamado Country, el cual recibirá  por Props el siguiente objeto que le enviaremos desde App.js y pintará por pantalla lo siguiente                                let  pais={name_en: "Afghanistan",   name_es: "Afganistán",   dial_code: "+93",code: "AF",  img:"https://www.despertaferro-ediciones.com/wp-content/uploads/2021/08/7408738172_4442b9be54_o.jpg"}

// 5. 5. Ahora nuestro componente Country recibira un array de paises por props y debera pintar cada pais en una card, solo si la longitud de caracateres del nombre en ingles es mayor a 4 en caso contrario deberá pintar una card vacía. (editado) 

import './country.css'

function Countries(props){
    return (
        <article className='card__container'>
            {
                props.name_en.length>4 ? <img className='card__img' alt={`imagen de la pais ${props.name_en}`} src={props.img}></img> : ''
            }
            {/* <img className='card__img' alt={`imagen de la pais ${props.name_en}`} src={props.img}></img> */}
            <div className={`card__body ${props.isDark ? 'card__body--dark' : '.card__body--light'}`}>
                {
                    props.name_en.length>4 ? <h2>{props.name_en}</h2> : ''
                }
                <hr></hr>
                {
                    props.name_en.length>4 ? <p className='card__content-ml'>Code: {props.code}</p> : ''
                }
                <hr></hr>
                {
                    props.name_en.length>4 ? <p className='card__content-ml'>Dial Code: {props.dial_code}</p> : ''
                }
                <hr></hr>
                <button className='card__content-ml card__button'>Buy tickets</button>
            </div>
        </article>
    )
        
}
export default Countries