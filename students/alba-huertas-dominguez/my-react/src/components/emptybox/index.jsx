import react from 'react';
import './stylesheet.css';




// Crear un componente EmptyBox que sea un contenedor de 150px por 150px vacio.
// En este componente tenemos que crear la funcion para pasarle la informacion {handleron}
//la funcion de handler tiene que llamar la funcion que le pasaremos.
// hay que hacer un evento para cuando pase el raton (mouseover) reciba la funcion handler.





function EmptyBox({ handlerOn = () => { } }) {

    const handler = () => {
        handlerOn('green')


    }
    const handlerr = () => {
        handlerOn('red')


    }

    return (

        <div onMouseLeave={handlerr} onMouseOver={handler} className="empty" > </div>
    )




}

export default EmptyBox